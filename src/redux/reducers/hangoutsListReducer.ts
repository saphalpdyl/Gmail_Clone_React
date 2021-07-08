import { hangoutsPersonAction } from "../../interface";
import personList from "../data/hangoutsPersonList";

const hangoutsListReducer = (
	state = personList,
	action: hangoutsPersonAction
) => {
	switch (action.type) {
		case "ADD_PERSON":
			return [...state, action.data];
		default:
			return state;
	}
};

export default hangoutsListReducer;
