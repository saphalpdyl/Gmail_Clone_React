import { sections } from "../data/emailSectionList";

const createActiveObj = (toBeActivated: string) => {
	let data: any = {};
	for (let ele of sections) {
		data[ele.code] = ele.code === toBeActivated;
	}
	return data;
};

const initialState = () => createActiveObj("INBOX");

const emailActiveSectionsReducer = (state = initialState(), action: any) => {
	switch (action.type) {
		case "CHANGE_TO_ACTIVE":
			return createActiveObj(action.code);
		default:
			return state;
	}
};

export default emailActiveSectionsReducer;
