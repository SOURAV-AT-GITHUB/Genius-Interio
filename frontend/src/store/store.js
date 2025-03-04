import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
import { thunk } from "redux-thunk"
import { adminPanelReducer, authReducer, formReducer } from "./reducers"

const rootReduser = combineReducers({
      adminPanel :adminPanelReducer,
      auth :authReducer,
      form:formReducer
})

export const store = legacy_createStore(rootReduser,applyMiddleware(thunk))