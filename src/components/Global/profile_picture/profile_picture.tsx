import "./css/profile_picture.css";

export interface ProfilePictureProps {
	profileName: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = (props) => {
	return (
		<div className="global-profile_picture">
			{props.profileName[0].toUpperCase()}
		</div>
	);
};

export default ProfilePicture;
