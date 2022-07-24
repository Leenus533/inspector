import { Box, Button, Input, Typography } from "@mui/material"
import { useResizeObserver } from "@mantine/hooks"
import { useEffect, useState } from "react"
import { checkPos } from "../components/positions"

export const Stage3Info = ({ setStage }) => {
	const [code, setCode] = useState("")

	return (
		<Box>
			<Typography textAlign={"center"} variant={"h4"}>
				Mission 3
			</Typography>
			<Typography variant={"body1"}>
				You have infultrated the suspects computer and you see they have left their password typed in. You need to find the
				password to pass this mission
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
			{code.toLowerCase() === "b33fcak3" && (
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
					<Button variant="outlined" onClick={() => setStage(6)}>
						Next Mission
					</Button>
				</Box>
			)}
		</Box>
	)
}

export const Stage3Playground = ({ setStage }) => {
	return (
		<Box>
			<Typography textAlign={"center"} variant={"h4"}>
				Secret Agents Email
			</Typography>
			<Typography textAlign={"center"} variant={"h6"}>
				Login
			</Typography>
			<Box p={4} my={2}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}>
					<Typography px={2} variant={"subtitle1"}>
						Email :
					</Typography>
					<Input value={"Suspect007@email.com"} />
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}>
					<Typography px={2} variant={"subtitle1"}>
						Password :
					</Typography>
					<Input type="password" value={"b33fcak3"} />
				</Box>
			</Box>
		</Box>
	)
}
