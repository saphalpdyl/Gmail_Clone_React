import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { hangoutPerson } from "../../../interface";
import HangoutsListItem from "./hangouts_list_item";
import { addHangoutPerson } from "../../../redux/actions/hangoutPerson";

import "./css/hangouts_list.css";
import React, { useState } from "react";

export interface HangoutsListProps {}

const HangoutsList: React.FC<HangoutsListProps> = () => {
	const personList: hangoutPerson[] = useSelector(
		(state: RootStateOrAny) => state.hangoutsListReducer
	);

	const [addPersonInput, setAddPersonInput] = useState("");

	//Handle input change
	const handleInputChange = (e: any) => {
		setAddPersonInput(e.target.value);
	};

	// dispatch instance
	const dispatch = useDispatch();

	//Handle On submit
	const handleSubmit = (e: any) => {
		e.preventDefault();
		dispatch(addHangoutPerson(addPersonInput));
		setAddPersonInput("");
	};

	return (
		<React.Fragment>
			<div className="section-menu-hangouts-list">
				{personList.map((person, index) => (
					<HangoutsListItem
						name={person.name}
						key={person.key}
						component_key={person.key}
					/>
				))}
			</div>
			<form onSubmit={handleSubmit}>
				<div className="section-menu-hangouts-add-list-item">
					<input onChange={handleInputChange} value={addPersonInput} />
					<button type="submit">Add</button>
				</div>
			</form>
		</React.Fragment>
	);
};

export default HangoutsList;
