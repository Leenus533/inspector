import { Box, Button, Input, Typography } from "@mui/material"
import { useState } from "react"
import Image from "next/image"

export const Stage1Info = ({ setStage }) => {
	const [code, setCode] = useState("")

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
					Their is giant rock hiding a secret code behind it. You will have to figure out a way to get the code behind the rock to
					get the to complete the mission.
				</Typography>
				<Box
					my={2}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Typography variant="h6">Enter Code Here:</Typography>
					<Input placeholder="Enter your code here" onChange={(e) => setCode(e.target.value)} value={code} />
				</Box>
				{code.toLowerCase() === "s3cr3t" && (
					<Box
						my={2}
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Typography py={2} fontSize={18} variant="body1">
							Congrats you have found the code. You can now move on to the next Mission.
						</Typography>
						<Button variant="outlined" onClick={() => setStage(4)}>
							Next Mission
						</Button>
					</Box>
				)}
			</Box>
		</Box>
	)
}

export const Stage1Playground = ({ setStage }) => {
	return (
		<Box>
			<Box
				padding={4}
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
				}}>
				<img
					loading="eager"
					style={{
						position: "absolute",
					}}
					src="/images/rock.webp"
					width="400px"
					height="600px"
				/>
				<img src={`/images/rock-code.webp`} width="400px" height="400px" />
			</Box>
		</Box>
	)
}
