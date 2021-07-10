import "./test.css";
import "./globalStylevariables.css";

import CheckBox from "./components/Global/checkbox";

export interface TestProps {}

const Test: React.FC<TestProps> = () => {
	return (
		<div className="test">
			<CheckBox root={true} initialState={true} />
		</div>
	);
};

export default Test;
