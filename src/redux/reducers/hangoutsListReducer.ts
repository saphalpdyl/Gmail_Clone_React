import { hangoutPerson } from "../../interface";

import personList from "../data/initialHangoutsPersonList";

const ID_VALUE_MAX: number = 1000000;
const ID_VALUE_MIN: number = 2437;

// Generate a random id for a user
const generateRandomNumber = (): number =>
	Math.round(Math.random() * (ID_VALUE_MAX - ID_VALUE_MIN) + ID_VALUE_MIN);

// * Checks if a generated random number is available
const checkForAvailability = (state: hangoutPerson[], id: number): boolean => {
	for (const person of state) {
		if (person.key == id) return false;
	}
	return true;
};

// * Unique Id generator
const generateUniqueId = (state: hangoutPerson[], action: any) => {
	let randomId: number = 0;

	while (true) {
		randomId = generateRandomNumber();
		if (checkForAvailability(state, randomId)) break;
	}

	return [
		...state,
		{
			name: action.data.name,
			key: randomId,
		},
	];
};

// * Removes a person from hangouts list
const removePerson = (state: hangoutPerson[], key: number) => {
	return state.filter((person) => person.key !== key);
};

const hangoutsListReducer = (state = personList, action: any) => {
	switch (action.type) {
		case "ADD_PERSON":
			return generateUniqueId(state, action);
		case "REMOVE_PERSON":
			return removePerson(state, action.key);
		default:
			return state;
	}
};

export default hangoutsListReducer;
