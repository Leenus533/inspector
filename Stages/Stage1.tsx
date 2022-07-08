import { Box, Typography } from "@mui/material"

export const Stage1Info = ({ setStage }) => {
	return (
		<Box>
			<Typography align="center" variant="h3">
				Objective
			</Typography>
			<Typography fontSize={23} variant="subtitle1">
				Difficulty Level: Easy
			</Typography>
			<Box p={2}>
				<Typography fontSize={18} variant="body1">
					Their is giant rock hiding a secret code behind it. You will have to figure out a way to get rid of the rock to get the
					code to complete the mission.
				</Typography>
			</Box>
		</Box>
	)
}

export const Stage1Playground = ({ setStage }) => {
	return <Box></Box>
}
