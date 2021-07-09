import React from "react";
import {
	hangoutsAddPersonAction,
	hangoutsRemovePersonAction,
} from "../../interface";

export const addHangoutPerson = (name: string): hangoutsAddPersonAction => {
	return {
		type: "ADD_PERSON",
		data: {
			name: name,
		},
	};
};

export const removeHangoutPerson = (
	key: number
): hangoutsRemovePersonAction => ({
	type: "REMOVE_PERSON",
	key: key,
});
