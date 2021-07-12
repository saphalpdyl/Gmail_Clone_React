import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { hangoutPerson } from "../../../interface";
import HangoutsListItem from "./hangouts_list_item";
import { addHangoutPerson } from "../../../redux/actions/hangoutPerson";

import "./css/hangouts_list.css";
import React, { useEffect, useState } from "react";

export interface HangoutsListProps {}

const COLORS_PREFIX: string = "--clr-";
//! To add colors , they must also be added to the globalStyles.css
const COLORS_SUFFIXES: string[] = ["red", "blue", "yellow", "green"];

const generateRandomColors = (): string => {
	return `var(${COLORS_PREFIX}${
		COLORS_SUFFIXES[Math.round(Math.random() * 2)]
	})`;
};

const HangoutsList: React.FC<HangoutsListProps> = () => {
	const personList: hangoutPerson[] = useSelector(
		(state: RootStateOrAny) => state.hangoutsListReducer
	);

	// Init Color state
	const [colorList, setColorList]: [string[], Function] = useState([]);

	/*
		Using useEffect here to initialize colorlist
		
		? Why use useEffect ?
		* To avoid colors switching every re-render.

		? Why init a tempColorList ?
		* To update the colorlist throught the setState function
		
	 */
	useEffect(() => {
		let tempColorList: string[] = [];

		personList.map((person, index) => {
			tempColorList[index] = generateRandomColors();
		});

		setColorList(tempColorList);
	}, []);

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
		setDisabled(true);
		setAddPersonInput("");
	};

	return (
		<React.Fragment>
			<div className="section-menu-hangouts-list">
				{personList.map((person, index) => {
					/**
					 * @description To add a new color to the color list when a person is added
					 */
					if (colorList[index] == null) {
						setColorList([...colorList, generateRandomColors()]);
					}
					return (
						<HangoutsListItem
							profileColor={colorList[index]}
							name={person.name}
							key={person.key}
							component_key={person.key}
						/>
					);
				})}
			</div>
			<form onSubmit={handleSubmit}>
				<div className="section-menu-hangouts-add-list-item">
					<input
						required
						className="section-menu-hangouts-add-list-item-input"
						onChange={handleInputChange}
						value={addPersonInput}
						placeholder="Person Name"
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
