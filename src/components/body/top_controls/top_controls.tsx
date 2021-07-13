import caret from "../../../SVGs/caret.svg";
import refresh_icon from "../../../SVGs/refresh_black_24dp.svg";
import more_icon from "../../../SVGs/more_vert_black_24dp.svg";
import keyboard_icon from "../../../SVGs/keyboard_black_24dp.svg";
import "./css/top_controls.css";

import RootCheckbox from "../../Global/checkbox/rootCheckbox";
import Button from "../../Global/hover_button/hover_button";

export interface TopControlsProps {}

const TopControls: React.FC<TopControlsProps> = () => {
	return (
		<div className="body-top-controls">
			<div className="body-top-controls-first">
				<div className="body-top-controls-first-checkbox">
					<RootCheckbox />
					<Button
						circleSize="2rem"
						imgSize="10px"
						tooltip="Select"
						icon={caret}
					/>
				</div>
				<Button tooltip="Refresh" icon={refresh_icon} />
				<Button icon={more_icon} tooltip="More" />
			</div>
			<div className="body-top-controls-second">
				{/* // todo : page component here */}
				<Button
					imgTransform="rotate(90deg)"
					imgSize="10px"
					tooltip="Newer"
					icon={caret}
				/>
				<Button
					imgTransform="rotate(-90deg)"
					imgSize="10px"
					tooltip="Older"
					icon={caret}
				/>
			</div>
		</div>
	);
};

export default TopControls;
