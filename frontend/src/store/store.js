import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { thunk } from "redux-thunk"
import { adminPanelReducer } from "./reducers"

const rootReduser = combineReducers({
      adminPanel :adminPanelReducer
})

export const store = legacy_createStore(rootReduser,applyMiddleware(thunk))