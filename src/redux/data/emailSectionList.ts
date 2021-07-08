import inbox_logo from "../../SVGs/inbox_black_24dp.svg";
import star_logo from "../../SVGs/star_black_24dp.svg";
import snooze_logo from "../../SVGs/watch_later_black_24dp.svg";
import sent_logo from "../../SVGs/send_black_24dp.svg";
import draft_logo from "../../SVGs/drafts_black_24dp.svg";

import { sectionItem } from "../../interface";

export const sections: sectionItem[] = [
	{
		title: "Inbox",
		src: inbox_logo,
		code: "INBOX",
		href: "#",
	},
	{
		title: "Starred",
		src: star_logo,
		code: "STARRED",
		href: "#",
	},
	{
		title: "Snoozed",
		src: snooze_logo,
		code: "SNOOZED",
		href: "#",
	},
	{
		title: "Sent",
		src: sent_logo,
		code: "SENT",
		href: "#",
	},
	{
		title: "Drafts",
		src: draft_logo,
		code: "DRAFT",
		href: "#",
	},
];
