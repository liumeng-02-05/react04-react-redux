import  defaultState  from './state'
import {CHANGE_VALUE,ADD_ITEM,DELETE_ITEM,GET_LIST} from './constant'

export default (state = defaultState,action)=>{
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case GET_LIST:
      newState.newList = action.payload
      return newState
    case CHANGE_VALUE:
      newState.inputValue = action.payload
      return newState
    case ADD_ITEM:
      newState.listValue.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    case DELETE_ITEM:
        newState.listValue.splice(action.payload,1)
      return newState
    default:
      return state
  }
}