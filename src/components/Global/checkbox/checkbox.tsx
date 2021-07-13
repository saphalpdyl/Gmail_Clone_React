import { useState } from "react";
import CheckBoxSkeleton from "./checkboxSkeleton";

export interface CheckBoxProps {}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
	const [checked, setChecked] = useState(false);

	const handleClick = () => {
		setChecked(!checked);
	};

	return <CheckBoxSkeleton isChecked={checked} handleClick={handleClick} />;
};

export default CheckBox;
