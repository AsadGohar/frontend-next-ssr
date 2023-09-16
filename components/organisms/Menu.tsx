import List from "@mui/material/List";
import MenuButton from "../molecules/MenuButton";

const SideBarMenu = () => {
	return (
		<List>
			{["Users", "Topics"].map((text) => (
				<MenuButton key={text} type={text} />
			))}
		</List>
	);
};

export default SideBarMenu;
