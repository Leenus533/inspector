import { Box, Typography } from "@mui/material"
import React from "react"
import { Stage1Playground } from "../Stages/Stage1"
import { Stage2Playground } from "../Stages/Stage2"
import { Stage3Playground } from "../Stages/Stage3"
import { Stage4Playground } from "../Stages/Stage4"
import { Stage5Playground } from "../Stages/Stage5"
import { StageObjectivePlayground } from "../Stages/StageObjective"
import { StageToolsPlayground } from "../Stages/StageTools"
import { StageWelcomePlayground } from "../Stages/StageWelcome"

const Playground = ({ stage, setStage }) => {
	return (
		<Box
			id={"Playground"}
			sx={{
				width: "calc(100% - 48px)",
				minHeight: "calc(100vh - 100px - 48px)",
				padding: "24px",
				margin: "24px",
				borderRadius: "24px",
				border: "4px solid rgba(255, 255, 255, 0.5)",
			}}>
			<Box
				sx={{
					minHeight: "100%",
					position: "relative",
				}}>
				{stage === 0 && <StageWelcomePlayground setStage={setStage} />}
				{stage === 1 && <StageToolsPlayground setStage={setStage} />}
				{stage === 2 && <StageObjectivePlayground setStage={setStage} />}
				{stage === 3 && <Stage1Playground setStage={setStage} />}
				{stage === 4 && <Stage2Playground setStage={setStage} />}
				{stage === 5 && <Stage3Playground setStage={setStage} />}
				{stage === 6 && <Stage4Playground setStage={setStage} />}
				{stage === 7 && <Stage5Playground setStage={setStage} />}
			</Box>
		</Box>
	)
}

export default Playground
