import { useSelector, RootStateOrAny } from "react-redux";
import { sectionItem } from "../../../interface";
import SectionListItem from "./section_item";

import "./css/section_list.css";
import React from "react";

export interface SectionListProps {
	reducer: string;
	margin: number;
	selection: boolean;
}

const SectionList: React.FC<SectionListProps> = (props) => {
	const sections: sectionItem[] = useSelector(
		(state: RootStateOrAny) => state[props.reducer]
	);

	return (
		<div className="section-menu-section-list">
			{sections.map((section, index) => (
				<SectionListItem
					selection={props.selection}
					reducer={props.reducer}
					margin={props.margin}
					imgData={section}
					key={index}
				/>
			))}
		</div>
	);
};

export default SectionList;
