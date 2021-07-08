import ProfilePicture from "../../Global/profile_picture/profile_picture";

import caret from "../../../SVGs/Vector.svg";

import "./css/hangouts_list_item.css";

export interface HangoutsListItemProps {
	name: string;
}

const HangoutsListItem: React.FC<HangoutsListItemProps> = (props) => {
	return (
		<div className="section-menu-hangouts-list-item">
			<div className="section-menu-hangouts-list-item-pp-container">
				<ProfilePicture profileName={props.name} />
			</div>
			<div className="section-menu-hangouts-list-item-name-container">
				<span className="section-menu-hangouts-list-item-name">
					{props.name.split(" ")[0]}
				</span>
				<img className="caret" src={caret} />
			</div>
		</div>
	);
};

export default HangoutsListItem;
