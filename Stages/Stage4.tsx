import { Box, Button, Typography } from "@mui/material"
import { useResizeObserver } from "@mantine/hooks"
import { useEffect, useState } from "react"
import { checkPos } from "../components/positions"

export const Stage4Info = ({ setStage }) => {
	const [completed, setCompleted] = useState(false)
	const handleClick = () => {
		setCompleted(checkPos())
	}
	return (
		<Box>
			<Typography textAlign={"center"} variant={"h4"}>
				Mission 4
			</Typography>
			<Typography variant={"body1"}>
				Goal of the current mission is to find the measurements of the red box and to make sure that the blue box also has the
				same measurements.
			</Typography>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
				}}>
				<Button
					sx={{
						margin: "1rem",
					}}
					onClick={handleClick}
					variant={"outlined"}>
					Check if you have completed the mission
				</Button>
			</Box>
			{completed && (
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
					p={4}>
					<Typography variant={"h6"}>Congrats you have completed the mission!</Typography>
					<Button onClick={() => setStage(7)} variant={"outlined"}>
						Next Mission
					</Button>
				</Box>
			)}
		</Box>
	)
}

export const Stage4Playground = ({ setStage }) => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "60vh",
			}}>
			<Box
				id="task"
				style={{
					width: "80px",
					height: "80px",
					backgroundColor: "rgba(0, 0, 255, 1)",
					position: "absolute",
					zIndex: "1",
				}}
			/>
			<Box
				id="target"
				style={{
					width: "247px",
					height: "264px",
					backgroundColor: "rgba(255, 0, 0, 0.5)",
					position: "absolute",
				}}
			/>
		</Box>
	)
}
