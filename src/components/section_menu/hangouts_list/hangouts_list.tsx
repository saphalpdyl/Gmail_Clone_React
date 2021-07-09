import { useSelector, RootStateOrAny } from "react-redux";
import { hangoutPerson } from "../../../interface";
import HangoutsListItem from "./hangouts_list_item";

import "./css/hangouts_list.css";

export interface HangoutsListProps {}

const HangoutsList: React.FC<HangoutsListProps> = () => {
	const personList: hangoutPerson[] = useSelector(
		(state: RootStateOrAny) => state.hangoutsListReducer
	);

	return (
		<div className="section-menu-hangouts-list">
			{personList.map((person, index) => (
				<HangoutsListItem
					name={person.name}
					key={person.key}
					component_key={person.key}
				/>
			))}
		</div>
	);
};

export default HangoutsList;
