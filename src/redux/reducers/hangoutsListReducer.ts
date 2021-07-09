import { hangoutPerson } from "../../interface";

import personList from "../data/initialHangoutsPersonList";

const removePerson = (state: hangoutPerson[], key: number) => {
	return state.filter((person) => person.key !== key);
};

const hangoutsListReducer = (state = personList, action: any) => {
	console.log(action);

	switch (action.type) {
		case "ADD_PERSON":
			return [...state, action.data];
		case "REMOVE_PERSON":
			return removePerson(state, action.key);
		default:
			return state;
	}
};

export default hangoutsListReducer;
