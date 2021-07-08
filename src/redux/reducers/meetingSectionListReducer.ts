import camera from "../../SVGs/videocam_black_24dp.svg";
import keyboard from "../../SVGs/keyboard_black_24dp.svg";

import { sectionItem } from "../../interface";

const sections: sectionItem[] = [
	{
		title: "New Meeting ",
		src: camera,
		code: "CAMERA",
	},
	{
		title: "Join a Meeting",
		src: keyboard,
		code: "KEYBOARD",
	},
];

const meetingSectionListReducer = () => sections;

export default meetingSectionListReducer;
