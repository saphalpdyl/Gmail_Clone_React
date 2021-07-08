import "./css/section_menu_header.css";

export interface SectionMenuHeaderProps {
	text: string;
}

const SectionMenuHeader: React.FC<SectionMenuHeaderProps> = (props) => {
	return (
		<div className="section-menu-header-container">
			<div className="section-menu-header">{props.text}</div>
		</div>
	);
};

export default SectionMenuHeader;
