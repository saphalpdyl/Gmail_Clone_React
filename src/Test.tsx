import React from "react";

import "./test.css";
import "./globalStylevariables.css";

import RootCheckbox from "./components/Global/checkbox/rootCheckbox";
import CheckBox from "./components/Global/checkbox/checkbox";

export interface TestProps {}

const Test: React.FC<TestProps> = () => {
	return (
		<div className="test">
			<RootCheckbox />

			<CheckBox isAlreadyChecked={true} />
		</div>
	);
};

export default Test;
