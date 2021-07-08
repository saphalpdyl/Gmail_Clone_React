import "./css/compose_btn.css";

import { ReactComponent as BtnSvg } from "../../../SVGs/Compose_Add_Btn.svg";

export interface ComposeButtonProps {}

const ComposeButton: React.FC<ComposeButtonProps> = () => {
	return (
		<div className="section-menu-compose-btn">
			<div className="section-menu-compose-btn-container">
				<div className="section-menu-compose-btn-svg">
					<BtnSvg />
				</div>
				<span className="section-menu-compose-btn-text">Compose</span>
			</div>
		</div>
	);
};

export default ComposeButton;
