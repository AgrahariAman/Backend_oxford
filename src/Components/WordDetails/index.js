import {
	Box,
	Divider,
	Typography,
	ListItem,
	IconButton
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import React from "react";

const WordDetails = props => {
	return (
		<Box
			style={{
				padding: "20px 20px",
				borderTopLeftRadius: 20,
				borderTopRightRadius: 20,
				background: "white"
			}}
		>
			{console.log(props.onClick)}
			<IconButton
				onClick={() => props.onClick()}
				style={{ marginLeft: "80vw" }}
			>
				<ClearIcon />
			</IconButton>
			<Box>
				<Typography style={{ fontWeight: "semi-bold", fontSize: 32 }}>
					resource
				</Typography>
				<Divider />
				<Typography
					style={{
						marginTop: 20,
						color: "#969696",
						fontWeight: 200,
						fontStyle: "italic",
						fontWeight: "semi-bold",
						fontSize: 13
					}}
				>
					noun
				</Typography>
				<Typography
					style={{
						marginTop: 10,
						fontWeight: 200,
						fontStyle: "italic",
						fontSize: 12,
						color: "#969696"
					}}
				>
					It is a long established fact that a reader will be
					distracted by the readable content of a page when looking at
					its layout. The point of using Lorem Ipsum is that it has a
					more-or-less normal distribution of letters, as opposed to
					using 'Content
				</Typography>
				{[...Array(3)].map((e, i) => (
					<Box>
						<Typography style={{ marginTop: 20, fontSize: 14 }}>
							It is a long established fact that a reader will be
							distracted by the readable content of a page when
							looking at its layout.
						</Typography>
						<ListItem>
							<Typography
								style={{
									marginTop: 8,
									fontSize: 11
								}}
							>
								It is a long established fact that a reader will
								be distracted by the readable content of a page
								when looking at its layout.
							</Typography>
						</ListItem>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default WordDetails;
