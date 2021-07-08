import SectionList from "../../Global/section_list/section_list";

export interface MeetingSectionsProps {}

const MeetingSections: React.FC<MeetingSectionsProps> = () => {
	return (
		<div className="section-menu-meetings-sections">
			<SectionList
				selection={false}
				margin={0}
				reducer="meetingSectionListReducer"
			/>
		</div>
	);
};

export default MeetingSections;
