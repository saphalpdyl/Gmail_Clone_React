import React from "react";
import "./css/divider.css";

export interface DividerProps {
	length: number;
	padding: number;
}

const Divider: React.FC<DividerProps> = (props) => {
	const dividerStyles: React.CSSProperties = {
		width: props.length + "rem",
		padding: `0rem ${props.padding}rem`,
	};

	return (
		<div style={dividerStyles} className="global-divider">
			<div className="global-divider-line"></div>
		</div>
	);
};

export default Divider;
