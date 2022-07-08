import { Box, Button, Typography } from "@mui/material"

export const StageObjectiveInfo = ({ setStage }) => {
	return (
		<Box>
			<Typography align="center" variant="h4">
				Objectives
			</Typography>
			<Box>
				<Typography fontSize={24} variant="body1">
					In the upcomming Missions you will be presented with a playground containing common css errors You will be then expected
					to fix these errors ,in your browser, according to the instructions provided. You will only be required to edit the code
					within the element with #playground id.
				</Typography>
				<Typography my={2} fontSize={24} variant="body1">
					Once you think you have completed the task you can then click the "Check" button to see if you have completed the
					mission.
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Button onClick={() => setStage(3)} size="large" variant="outlined">
						Start your first mission
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export const StageObjectivePlayground = ({ setStage }) => {
	return (
		<Typography variant="h4" align="center">
			Playground
		</Typography>
	)
}
