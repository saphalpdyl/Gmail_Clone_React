import { createStore, combineReducers, compose } from "redux";

// ! All Reducers
import emailSectionListReducer from "./reducers/emailSectionListReducer";
import meetingSectionListReducer from "./reducers/meetingSectionListReducer";
import emailActiveSectionsReducer from "./reducers/emailActiveSectionsReducer";
import hangoutsListReducer from "./reducers/hangoutsListReducer";

const rootReducer = combineReducers({
	emailSectionListReducer,
	meetingSectionListReducer,
	emailActiveSectionsReducer,
	hangoutsListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers());

export default store;
