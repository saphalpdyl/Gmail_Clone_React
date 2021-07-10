import "./css/app_icon.css";

export interface AppIconProps {
	src: string;
	handleClick: any;
}

const AppIcon: React.FC<AppIconProps> = (props) => {
	return (
		<div className="app-menu-icon-position">
			<div onClick={props.handleClick} className="app-menu-icon-container">
				<img src={props.src} />
			</div>
		</div>
	);
};

export default AppIcon;
