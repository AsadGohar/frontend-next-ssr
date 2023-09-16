import ListItemText from "@mui/material/ListItemText";

interface IProps {
	type: string;
}

const IconText = (props: IProps) => {
	const { type } = props;
	return <ListItemText primary={type} />;
};

export default IconText;
