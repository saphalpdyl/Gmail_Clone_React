import React from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { sectionItem } from "../../../interface";
import { changeToActive } from "../../../redux/actions/changeToActive";

export interface SectionListItemProps {
	imgData: sectionItem;
	margin: number;
	reducer: string;
	selection: boolean;
}

const SectionListItem: React.FC<SectionListItemProps> = (props) => {
	const margin = `${props.margin}rem 0rem`;

	let styles: React.CSSProperties = {
		margin: margin,
	};

	const dispatch = useDispatch();
	const returnActiveData = useSelector(
		(state: RootStateOrAny) =>
			state[props.selection ? "emailActiveSectionsReducer" : ""]
	);

	let handleClick = () => {};
	if (props.selection) {
		if (returnActiveData[props.imgData.code]) {
			styles = {
				margin: margin,
				backgroundColor: "var(--clr-red-transparent)",
				filter: "var(--clr-red-fill)",
			};
		}

		handleClick = () => {
			if (!returnActiveData[props.imgData.code]) {
				dispatch(changeToActive(props.imgData.code));
			}
		};
	}

	return (
		<div
			style={styles}
			onClick={handleClick}
			className="section-menu-section-list-item"
		>
			<img
				className="section-menu-section-list-item-img"
				src={props.imgData.src}
				alt="Image"
			/>
			<span>{props.imgData.title}</span>
		</div>
	);
};

export default SectionListItem;
