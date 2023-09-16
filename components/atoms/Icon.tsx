import ListItemIcon from "@mui/material/ListItemIcon";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import PersonIcon from "@mui/icons-material/Person";
import TopicIcon from "@mui/icons-material/Topic";

interface IProps {
	type: string;
}

const Icon = (props: IProps) => {
	const { type } = props;
	return (
		<ListItemIcon>
			{type === "Users" && <PeopleAltIcon />}
			{type === "Topics" && <DynamicFeedIcon />}
			{type === "User" && <PersonIcon />}
			{type === "Topic" && <TopicIcon />}
		</ListItemIcon>
	);
};

export default Icon;
