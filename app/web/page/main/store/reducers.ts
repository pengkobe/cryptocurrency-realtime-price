import { CRYPTOCURRENCY_LIST, REFRESH } from './constant';

export default function update(state, action) {
  const newState = Object.assign({}, state);
  if (action.type === CRYPTOCURRENCY_LIST) {
    newState.list = action.data;
  } else if (action.type === REFRESH) {
    let message = action.data;
    // console.log('---i am in reducer---', message)
    let list = newState.list;
    if (list) {
      for (let curr of list) {
        if (curr.name == message.name) {
          for (let val of message.changeList) {
            curr[val.property] = val.value;
          }
        }
      }
      newState.list = [...list]
    }
  }
  return newState;
}
