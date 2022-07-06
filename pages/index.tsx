import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Link from "../src/Link"
import NavBar from "../components/NavBar"
import { useState } from "react"
import Information from "../components/Information"
import Playground from "../components/Playground"

export default function Index() {
	const [stage, setStage] = useState(-2)
	const totalStages = 3

	return (
		<Box>
			<NavBar stage={stage} setStage={setStage} totalStages={totalStages} />
			<Box
				sx={{
					display: "flex",

					height: "calc(100vh - 94px)",
					"@media (max-width: 700px)": {
						flexDirection: "column",
					},
				}}>
				{stage !== totalStages ? (
					<>
						<Information stage={stage} />
						<Playground stage={stage} />{" "}
					</>
				) : (
					<Typography p={8} m={"0 auto"} textAlign={"center"} variant={"h3"}>
						Congrats you are officially a Pro Inspector!
					</Typography>
				)}
			</Box>
		</Box>
	)
}
