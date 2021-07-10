import calender_icon from "../../SVGs/Calendr_icon.svg";
import keep_icon from "../../SVGs/Google_keep_icon.svg";
import task_icon from "../../SVGs/Google_Tasks_icon.svg";
import contacts_icon from "../../SVGs/Contacts.svg";
import add_icon from "../../SVGs/+.svg";

import Divider from "../Global/divider";
import AppIcon from "./app_icon";

import "./css/app_menu.css";

export interface SectionMenuProps {}

const SectionMenu: React.FC<SectionMenuProps> = () => {
	const handleClick = (e: any) => {
		console.log("A icon was clicked");
	};

	//Google Calender Click Handler
	const calendarClickHandler = () => window.open("https://calendar.google.com");

	//Google Keep Click Handler
	const keepClickHandler = () => window.open("https://keep.google.com");

	//Google task Click Handler
	// ! No feature set till now
	const taskClickHandler = () => window.alert("No feature ");

	//Google contacts Click Handler
	const contactsClickHandler = () => window.open("https://contacts.google.com");

	//Google add Click Handler
	// ! No feature set till now
	const addClickHandler = () => window.alert("Feature not set");

	return (
		<div className="app-menu-section">
			<AppIcon src={calender_icon} handleClick={calendarClickHandler} />
			<AppIcon src={keep_icon} handleClick={keepClickHandler} />
			<AppIcon src={task_icon} handleClick={taskClickHandler} />
			<AppIcon src={contacts_icon} handleClick={contactsClickHandler} />
			<Divider padding={0} length={4} />
			<AppIcon src={add_icon} handleClick={addClickHandler} />
		</div>
	);
};

export default SectionMenu;
