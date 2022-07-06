import { Box, Typography } from "@mui/material"
import React from "react"
import { Stage1Info } from "../Stages/Stage1"
import { Stage2Info } from "../Stages/Stage2"
import { StageObjectiveInfo } from "../Stages/StageObjective"
import { StageToolsInfo } from "../Stages/StageTools"
import { StageWelcomeInfo } from "../Stages/StageWelcome"

const Information = ({ stage }) => {
	return (
		<Box
			id={"Information"}
			sx={{
				width: "calc(100% - 48px)",
				height: "calc(100vh - 94px - 48px)",
				padding: "24px",
				margin: "24px",
			}}>
			{stage === -2 && <StageWelcomeInfo />}
			{stage === -1 && <StageToolsInfo />}
			{stage === 0 && <StageObjectiveInfo />}
			{stage === 1 && <Stage1Info />}
			{stage === 2 && <Stage2Info />}
		</Box>
	)
}

export default Information
