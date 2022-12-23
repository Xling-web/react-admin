import config from './config'

// combineReducers 合并各个reducer
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  config
})

export default rootReducer