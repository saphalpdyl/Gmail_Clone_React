import ComposeButton from "./compose_btn/compose_btn";
import EmailSections from "./email_sections/email_sections";
import Divider from "../Global/divider";
import MeetingSections from "./meeting_sections/meeting_sections";
import SectionMenuHeader from "./section_menu_header";
import HangoutsList from "./hangouts_list/hangouts_list";

import "./css/section_menu.css";

export interface SectionMenuProps {}

const SectionMenu: React.FC<SectionMenuProps> = () => {
	return (
		<div className="section-menu-section">
			<ComposeButton />
			<EmailSections />
			<Divider length={35} padding={1} />
			<SectionMenuHeader text="Meet" />
			<MeetingSections />
			<Divider length={35} padding={1} />
			<SectionMenuHeader text="Hangouts" />
			<HangoutsList />
		</div>
	);
};

export default SectionMenu;
