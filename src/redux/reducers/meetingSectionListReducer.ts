import camera from "../../SVGs/videocam_black_24dp.svg";
import keyboard from "../../SVGs/keyboard_black_24dp.svg";

import { sectionItem } from "../../interface";

const sections: sectionItem[] = [
	{
		title: "New Meeting ",
		src: camera,
		code: "CAMERA",
		href: "https://meet.google.com/",
	},
	{
		title: "Join a Meeting",
		src: keyboard,
		code: "KEYBOARD",
		href: "https://meet.google.com/",
	},
];

const meetingSectionListReducer = () => sections;

export default meetingSectionListReducer;
