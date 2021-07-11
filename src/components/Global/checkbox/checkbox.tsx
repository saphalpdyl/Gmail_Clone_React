import { useState } from "react";
import CheckBoxSkeleton from "./checkboxSkeleton";

export interface CheckBoxProps {
	isAlreadyChecked: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
	const [checked, setChecked] = useState(props.isAlreadyChecked);

	const handleClick = () => {
		setChecked(!checked);
	};

	return <CheckBoxSkeleton isChecked={checked} handleClick={handleClick} />;
};

export default CheckBox;
