import React, { useState } from "react";
import "./css/checkbox.css";

export interface CheckBoxProps {
	root: boolean;
	initialState: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
	const [checked, setChecked] = useState(props.initialState);

	let styles: React.CSSProperties = {};

	const handleClick = () => {
		setChecked(!checked);
	};

	if (checked) styles = { backgroundColor: "#212121" };
	else styles = {};

	return (
		<div onClick={handleClick} className="global-checkbox" style={styles}>
			<div className="global-checkbox-checkmark">/</div>
		</div>
	);
};

export default CheckBox;
