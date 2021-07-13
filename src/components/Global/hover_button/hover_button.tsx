import React from "react";
import "./css/hover_button.css";

export interface ButtonProps {
	tooltip: string;
	icon: string;
	imgSize?: string;
	imgTransform?: string;
	circleSize?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
	const buttonStyles = {
		"--afterHoverLength": props.circleSize,
	} as React.CSSProperties;

	return (
		<div style={buttonStyles} className="global-button">
			<div className="global-button-container">
				<div className="global-button-position">
					<img
						style={{
							height: props.imgSize,
							width: props.imgSize,
							transform: props.imgTransform,
						}}
						src={props.icon}
						alt="icon"
					/>
				</div>
			</div>
			<div className="global-button-tooltip">
				{props.tooltip}
				<div className="arrow-up"></div>
			</div>
		</div>
	);
};

export default Button;
