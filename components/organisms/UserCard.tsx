import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Icon from "../atoms/Icon";
import { Typography } from "@mui/material";

interface IProps {
	name: string;
}

const UserCard = (props: IProps) => {
	const { name } = props;
	return (
		<div>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					width: "300px",
					border: (theme) => `1px solid ${theme.palette.divider}`,
					borderRadius: 1,
					bgcolor: "background.paper",
					color: "text.secondary",
					"& svg": {
						m: 1.5,
					},
					"& hr": {
						mx: 0.5,
					},
					mb:1
				}}
			>
				<Icon type="User" />
				<Divider orientation="vertical" variant="middle" flexItem />
				<Typography sx={{px:2}}>{name}</Typography>
			</Box>
		</div>
	);
};

export default UserCard;
