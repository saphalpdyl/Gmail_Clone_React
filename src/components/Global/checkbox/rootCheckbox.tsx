import { useState } from "react";
import CheckBoxSkeleton from "./checkboxSkeleton";

export interface RootCheckboxProps {}

const RootCheckbox: React.FC<RootCheckboxProps> = (props) => {
	const [checked, setChecked] = useState(false);

	const rootClickHandler = () => {
		if (!checked) {
			document.querySelectorAll(".global-checkbox").forEach((ele: any) => {
				if (ele.style["background-color"] != "rgb(33, 33, 33)") {
					ele.click();
				}
			});
		} else {
			document.querySelectorAll(".global-checkbox").forEach((ele: any) => {
				if (ele.style["background-color"] != "rgb(255, 255, 255)") ele.click();
			});
		}

		setChecked(!checked);
	};

	return (
		<CheckBoxSkeleton isChecked={checked} handleClick={rootClickHandler} />
	);
};

export default RootCheckbox;
