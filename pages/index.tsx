import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Link from "../src/Link"
import NavBar from "../components/NavBar"
import { useState } from "react"
import Information from "../components/Information"
import Playground from "../components/Playground"
import { LinearProgress } from "@mui/material"

export default function Index() {
	const [stage, setStage] = useState(0)
	const totalStages = 8

	return (
		<Box>
			<NavBar stage={stage} setStage={setStage} totalStages={totalStages} />
			<LinearProgress variant="determinate" value={(stage / totalStages) * 100} />
			<Box
				sx={{
					display: "flex",

					minHeight: "calc(100vh - 100px)",
					"@media (max-width: 700px)": {
						flexDirection: "column",
					},
				}}>
				{stage !== totalStages ? (
					<>
						<Information setStage={setStage} stage={stage} />
						<Playground setStage={setStage} stage={stage} />{" "}
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
