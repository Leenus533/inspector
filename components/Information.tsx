import { Box, Typography } from "@mui/material"
import React from "react"
import { Stage1Info } from "../Stages/Stage1"
import { Stage2Info } from "../Stages/Stage2"
import { StageObjectiveInfo } from "../Stages/StageObjective"
import { StageToolsInfo } from "../Stages/StageTools"
import { StageWelcomeInfo } from "../Stages/StageWelcome"

const Information = ({ stage, setStage }) => {
	return (
		<Box
			id={"Information"}
			sx={{
				width: "calc(100% - 48px)",
				minHeight: "calc(100vh - 100px - 48px)",
				padding: "24px",
				margin: "24px",
			}}>
			{stage === 0 && <StageWelcomeInfo setStage={setStage} />}
			{stage === 1 && <StageToolsInfo setStage={setStage} />}
			{stage === 2 && <StageObjectiveInfo setStage={setStage} />}
			{stage === 3 && <Stage1Info setStage={setStage} />}
			{stage === 4 && <Stage2Info setStage={setStage} />}
		</Box>
	)
}

export default Information
