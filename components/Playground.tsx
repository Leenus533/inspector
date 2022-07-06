import { Box, Typography } from "@mui/material"
import React from "react"
import { Stage1Playground } from "../Stages/Stage1"
import { Stage2Playground } from "../Stages/Stage2"
import { StageObjectivePlayground } from "../Stages/StageObjective"
import { StageToolsPlayground } from "../Stages/StageTools"
import { StageWelcomePlayground } from "../Stages/StageWelcome"

const Playground = ({ stage }) => {
	return (
		<Box
			id={"Playground"}
			sx={{
				width: "calc(100% - 48px)",
				height: "calc(100vh - 94px - 48px)",
				padding: "24px",
				margin: "24px",
				borderRadius: "24px",
				border: "4px solid rgba(255, 255, 255, 0.5)",
			}}>
			{stage === -2 && <StageWelcomePlayground />}
			{stage === -1 && <StageToolsPlayground />}
			{stage === 0 && <StageObjectivePlayground />}
			{stage === 1 && <Stage1Playground />}
			{stage === 2 && <Stage2Playground />}
		</Box>
	)
}

export default Playground
