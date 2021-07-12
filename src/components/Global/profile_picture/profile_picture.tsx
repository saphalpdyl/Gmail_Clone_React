import React from "react";
import "./css/profile_picture.css";

export interface ProfilePictureProps {
	profileName: string;
	color: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = (props) => {
	return (
		<div
			style={{ backgroundColor: props.color }}
			className="global-profile_picture"
		>
			{props.profileName[0].toUpperCase()}
		</div>
	);
};

export default ProfilePicture;
