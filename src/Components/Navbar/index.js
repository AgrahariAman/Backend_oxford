import React, { useState } from "react";
import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
	Input,
	InputAdornment
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = ({ props, classes }) => {
	const [showSearch, toggleSearch] = useState(true);

	return (
		<>
			<AppBar
				style={{
					background: "#5d104a",
					boxShadow: "none"
				}}
			>
				<Toolbar>
					<div style={{ flex: 1 }}>
						<Typography>Vocab</Typography>
					</div>
					{showSearch ? (
						<IconButton
							onClick={() => toggleSearch(!showSearch)}
							style={{ color: "white" }}
						>
							<SearchIcon />
						</IconButton>
					) : (
						<>
							<Input
								endAdornment={
									<InputAdornment>
										<IconButton>
											<SearchIcon
												onClick={() =>
													toggleSearch(!showSearch)
												}
												style={{ color: "white" }}
											/>
										</IconButton>
									</InputAdornment>
								}
							/>
						</>
					)}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
