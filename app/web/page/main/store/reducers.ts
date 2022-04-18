import { CRYPTOCURRENCY_DETAIL, CRYPTOCURRENCY_LIST, ADD, DEL, REFRESH } from './constant';

export default function update(state, action) {
  const newState = Object.assign({}, state);
  if (action.type === ADD) {
    const list = Array.isArray(action.data) ? action.data : [action.data];
    newState.list = [...newState.list, ...list];
  } else if (action.type === DEL) {
    newState.list = newState.list.filter(data => {
      return data.id !== action.id;
    });
  } else if (action.type === CRYPTOCURRENCY_LIST) {
    newState.list = action.data;
  } else if (action.type === CRYPTOCURRENCY_DETAIL) {
    newState.cryptocurrency = action.data.cryptocurrency;
  } else if (action.type === REFRESH) {
    let message = action.data;
    console.log('------------i am in reducer----', message)
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
