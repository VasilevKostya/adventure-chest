import {current} from './engine.mjs';

export function planTreasure(action,before,after){
  if(action.type!=='open')return null;
  const retainedIds=new Set(current(before).items.map(item=>item.id));
  // A spent item returns to the pool and may immediately be drawn again.
  if(action.source?.type==='item')retainedIds.delete(action.source.id);
  const chestCount=(action.targets||[]).length;
  const items=current(after).items.filter(item=>!retainedIds.has(item.id));
  return items.length?{items,chestCount}:null;
}
