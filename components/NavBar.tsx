import { AppBar, Box, Button, Typography } from "@mui/material"
import React from "react"

const NavBar = ({ stage, setStage, totalStages }) => {
	const previousStage = () => {
		if (stage > 0) {
			setStage(stage - 1)
		}
	}
	const nextStage = () => {
		if (stage === totalStages - 1) return
		setStage(stage + 1)
	}

	return (
		<AppBar sx={{ height: "94px", boxShadow: "0 5px 10px rgba(0 0 0 / 40%)", padding: "8px" }} position="static">
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
				}}>
				<Typography margin={"0 auto"} variant="h2" component={"h1"} textAlign={"center"}>
					Mr.Inspector
				</Typography>
				<Box>
					<Typography variant="h6" align="center">
						{stage === 0
							? "Welcome"
							: stage === 1
							? "Tools"
							: stage === 2
							? "Objective"
							: stage === totalStages
							? "Completed"
							: `Mission : ${stage - 2}`}
					</Typography>
					<Box
						sx={{
							display: "flex",
						}}>
						<Button
							sx={{
								margin: "4px",
							}}
							fullWidth
							variant={"outlined"}
							onClick={previousStage}>
							Previous
						</Button>
						<Button
							sx={{
								margin: "4px",
							}}
							fullWidth
							variant={"outlined"}
							onClick={nextStage}>
							Next
						</Button>
					</Box>
				</Box>
			</Box>
		</AppBar>
	)
}

export default NavBar
