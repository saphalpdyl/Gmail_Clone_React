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

	// * For name Input
	const [addPersonInput, setAddPersonInput] = useState("");
	// * For button disabling
	const [disabled, setDisabled]: [boolean, Function] = useState(true);

	//Handle input change
	const handleInputChange = (e: any) => {
		if (e.target.value == "") setDisabled(true);
		else setDisabled(false);
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
					<input
						required
						className="section-menu-hangouts-add-list-item-input"
						onChange={handleInputChange}
						value={addPersonInput}
					/>
					<button
						className="section-menu-hangouts-add-list-item-btn"
						disabled={disabled}
						type="submit"
					>
						Add
					</button>
				</div>
			</form>
		</React.Fragment>
	);
};

export default HangoutsList;
