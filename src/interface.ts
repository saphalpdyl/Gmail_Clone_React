import { compose } from "redux";

export interface rootAction {
	type: string;
}

export interface hangoutsAddPersonAction extends rootAction {
	data?: hangoutPerson;
}

export interface hangoutsRemovePersonAction extends rootAction {
	key: number;
}

export interface sectionItem {
	title: string;
	src: string;
	code: string;
	href?: string;
}

export interface hangoutPerson {
	name: string;
	key: number;
}

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
