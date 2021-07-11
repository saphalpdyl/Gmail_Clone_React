import React, { useState } from "react";
import "./css/checkbox.css";

export interface CheckBoxSkeletonProps {
	isChecked: boolean;
	handleClick: Function;
}

const CheckBoxSkeleton: React.FC<CheckBoxSkeletonProps> = (props) => {
	let styles: React.CSSProperties = {};

	if (props.isChecked)
		styles = { border: "1rem solid #212121", backgroundColor: "#212121" };
	else styles = {};

	return (
		<div
			onClick={props.handleClick as any}
			className="global-checkbox"
			style={styles}
		></div>
	);
};

export default CheckBoxSkeleton;
