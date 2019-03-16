import { combineReducers } from 'redux'

const console = (store = {out:{}}, actions) => {
  return store
}

const rootReducer = combineReducers({
  console
})

export default rootReducer
