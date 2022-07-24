import { Box, Typography } from "@mui/material"
import React from "react"
import { Stage1Info } from "../Stages/Stage1"
import { Stage2Info } from "../Stages/Stage2"
import { Stage3Info } from "../Stages/Stage3"
import { Stage4Info } from "../Stages/Stage4"
import { Stage5Info } from "../Stages/Stage5"
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
			{stage === 5 && <Stage3Info setStage={setStage} />}
			{stage === 6 && <Stage4Info setStage={setStage} />}
			{stage === 7 && <Stage5Info setStage={setStage} />}
		</Box>
	)
}

export default Information
