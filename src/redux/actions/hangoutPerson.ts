import { hangoutsPersonAction } from "../../interface";

export const addHangoutPerson = (name: string): hangoutsPersonAction => ({
	type: "ADD_PERSON",
	data: {
		name: name,
	},
});
