import { compose } from "redux";

export interface rootAction {
	type: string;
}

export interface sectionItem {
	title: string;
	src: string;
	code: string;
}

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}
