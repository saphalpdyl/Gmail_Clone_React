import React from "react";
import {
	hangoutsAddPersonAction,
	hangoutsRemovePersonAction,
} from "../../interface";

export const addHangoutPerson = (
	name: string,
	key: number
): hangoutsAddPersonAction => ({
	type: "ADD_PERSON",
	data: {
		name: name,
		key: key,
	},
});

export const removeHangoutPerson = (
	key: number
): hangoutsRemovePersonAction => ({
	type: "REMOVE_PERSON",
	key: key,
});
