export const changeToActive = (code: string) => {
	return {
		type: "CHANGE_TO_ACTIVE",
		code: code,
	};
};
