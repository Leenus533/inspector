import { Box, Button, Input, Typography } from "@mui/material"
import Image from "next/image"
import { useEffect, useState } from "react"
import { checkPos } from "../components/positions"
import { useLocalStorage } from "@mantine/hooks"

export const Stage5Info = ({ setStage }) => {
	const [code, setCode] = useState("")
	const [value, setValue] = useLocalStorage({ key: "secretKey", defaultValue: "randomTest" })

	return (
		<Box>
			<Typography textAlign={"center"} variant={"h4"}>
				Mission 5
			</Typography>
			<Typography variant={"body1"}>
				You need another secret key to opent the door. The secret key is hidden within localStorage . The Goal of the current
				mission is to find the key that is hidden .
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
			{code === value && (
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
					<Button variant="outlined" onClick={() => setStage(8)}>
						Next Mission
					</Button>
				</Box>
			)}
		</Box>
	)
}

export const Stage5Playground = ({ setStage }) => {
	const [value, setValue] = useLocalStorage({ key: "secretKey", defaultValue: "randomTest" })

	useEffect(() => {
		// create a random key
		const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
		setValue(key)
	}, [])

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Image src="/images/door.png" height={"600px"} width={"300px"} />
		</Box>
	)
}
