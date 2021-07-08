import { compose } from "redux";

export interface rootAction {
	type: string;
}

export interface hangoutsPersonAction extends rootAction {
	data?: hangoutPerson;
}

export interface sectionItem {
	title: string;
	src: string;
	code: string;
	href?: string;
}

export interface hangoutPerson {
	name: string;
}

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
