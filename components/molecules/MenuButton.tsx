import ListItemButton from "@mui/material/ListItemButton";
import Icon from "../atoms/Icon";
import Link from "next/link";
import IconText from "../atoms/IconText";

interface IProps {
	type: string;
}

const MenuButton = (props: IProps) => {
	const { type } = props;

	return (
		<Link href={`/${type.toLowerCase()}`}>
			<ListItemButton>
				<Icon type={type} />
				<IconText type={type} />
			</ListItemButton>
		</Link>
	);
};

export default MenuButton;
