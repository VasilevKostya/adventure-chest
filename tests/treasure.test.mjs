import test from 'node:test';
import assert from 'node:assert/strict';
import {createGame,act,current,assertState} from '../dist/engine.mjs';
import {planTreasure} from '../dist/treasure.mjs';

function give(s,kind){
  const [item]=s.pool.splice(s.pool.findIndex(x=>x.kind===kind),1);
  current(s).items.push(item);
  return item;
}

function setup(chestCount,kind){
  const before=act(createGame(['Анна','Константин'],1234),{type:'begin'});
  before.phase='loot';
  before.lair=[];
  before.party.forEach(x=>{x.face='thief';x.zone='active';});
  before.dungeon=Array.from({length:chestCount},(_,id)=>({id,face:'chest'}));
  before.dungeon.push({id:chestCount,face:'potion'});
  give(before,'ring');
  const source=kind?{type:'item',id:give(before,kind).id}:{type:'die',id:0};
  give(before,'scale');
  return {before,action:{type:'open',source,targets:Array.from({length:chestCount},(_,id)=>id)}};
}

function limitPool(before,count){
  // Keep all 36 unique tokens in play while controlling treasure availability.
  before.players[1].items.push(...before.pool.splice(count));
}

function checkOpening(before,action,expectedCount){
  const original=structuredClone(before);
  const after=act(before,action);
  const snapshot=structuredClone(after);
  const spent=action.source.type==='item'
    ?current(before).items.find(x=>x.id===action.source.id):null;
  const available=[...before.pool,...(spent?[spent]:[])];
  // The pool independently identifies awarded tokens, including a redrawn source.
  const awarded=available.filter(x=>!after.pool.some(y=>y.id===x.id));
  const retained=current(before).items.filter(x=>x.id!==spent?.id);
  const motion=planTreasure(action,before,after);

  assert.equal(awarded.length,expectedCount);
  if(expectedCount){
    assert.ok(motion,'Полученные жетоны должны запускать анимацию');
    assert.equal(motion.chestCount,action.targets.length);
    assert.equal(motion.items.length,expectedCount);
    assert.deepEqual(motion.items.map(x=>x.id).sort(),awarded.map(x=>x.id).sort());
    // Preserve retained inventory and reveal rewards in their acquisition order.
    assert.deepEqual(current(after).items,[...retained,...motion.items]);
  }else{
    assert.equal(motion,null);
    assert.deepEqual(current(after).items,retained);
  }
  assert.equal(current(after).xp,current(before).xp+action.targets.length-expectedCount);
  assert.equal(after.pool.length,available.length-expectedCount);
  assert.deepEqual(after.dungeon,before.dungeon.filter(x=>!action.targets.includes(x.id)));
  assert.deepEqual(after.players[1],before.players[1]);
  const expectedParty=structuredClone(before.party);
  if(action.source.type==='die')expectedParty.find(x=>x.id===action.source.id).zone='grave';
  assert.deepEqual(after.party,expectedParty);
  assert.deepEqual(before,original,'Открытие не изменяет исходное состояние');
  assert.deepEqual(after,snapshot,'План анимации не изменяет инвентарь или пул');
  assertState(after);
  return {after,motion};
}

for(const kind of ['sword','talisman','wand','tools']){
  test(`Один сундук с предметом ${kind}: награда видна, предмет расходуется`,()=>{
    const {before,action}=setup(1,kind);
    const {after}=checkOpening(before,action,1);
    assert.ok(after.pool.some(x=>x.id===action.source.id));
    assert.ok(!current(after).items.some(x=>x.id===action.source.id));
  });
}

for(const chestCount of [2,3]){
  test(`Инструменты открывают ${chestCount} сундука: видны все награды`,()=>{
    const {before,action}=setup(chestCount,'tools');
    const {after}=checkOpening(before,action,chestCount);
    assert.ok(after.pool.some(x=>x.id===action.source.id));
    assert.ok(!current(after).items.some(x=>x.id===action.source.id));
  });
}

for(const [face,chestCount] of [['warrior',1],['thief',3],['champion',3]]){
  test(`Кубик ${face} открывает ${chestCount} сундук(а): награды и старые вещи сохранены`,()=>{
    const {before,action}=setup(chestCount);
    before.party[0].face=face;
    checkOpening(before,action,chestCount);
  });
}

for(const chestCount of [1,3]){
  test(`Потраченные инструменты выпадают снова при открытии ${chestCount} сундук(а)`,()=>{
    const {before,action}=setup(chestCount,'tools');
    limitPool(before,0);
    const {motion}=checkOpening(before,action,1);
    assert.deepEqual(motion.items,[current(before).items.find(x=>x.id===action.source.id)]);
  });
}

test('Если жетонов не хватает, показываются только реальные награды, остальное даёт опыт',()=>{
  const {before,action}=setup(3);
  limitPool(before,1);
  checkOpening(before,action,1);
});

test('Пустой пул при открытии кубиком даёт опыт без показа старых жетонов',()=>{
  const {before,action}=setup(3);
  limitPool(before,0);
  checkOpening(before,action,0);
});

test('Другие действия не запускают анимацию открытия сундука',()=>{
  const {before}=setup(1);
  const action={type:'advance'};
  const after=act(before,action);
  assert.equal(planTreasure(action,before,after),null);
});
