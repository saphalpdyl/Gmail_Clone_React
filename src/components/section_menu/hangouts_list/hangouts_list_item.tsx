import { removeHangoutPerson } from "../../../redux/actions/hangoutPerson";
import { useDispatch } from "react-redux";

import ProfilePicture from "../../Global/profile_picture/profile_picture";

import caret from "../../../SVGs/Vector.svg";
import remove_person_icon from "../../../SVGs/Remove Person.svg";

import "./css/hangouts_list_item.css";

export interface HangoutsListItemProps {
	name: string;
	component_key: number;
}

const HangoutsListItem: React.FC<HangoutsListItemProps> = (props) => {
	const dispatch = useDispatch();
	const handleClick = () => dispatch(removeHangoutPerson(props.component_key));

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
			<div className="section-menu-hangouts-list-item-delete-container">
				<div
					onClick={handleClick}
					className="section-menu-hangouts-list-item-delete-position"
				>
					<img
						className="section-menu-hangouts-list-item-delete"
						src={remove_person_icon}
						alt="Remove Person"
					/>
				</div>
			</div>
		</div>
	);
};

export default HangoutsListItem;
