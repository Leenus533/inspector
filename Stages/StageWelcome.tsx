import { Box, Button, Typography } from "@mui/material"
import Image from "next/image"

export const StageWelcomeInfo = ({ setStage }) => {
	return (
		<Box>
			<Typography
				sx={{
					"@media (max-width: 600px)": {
						fontSize: "3rem",
					},
				}}
				align="center"
				variant={"h2"}>
				Welcome to Mr.Inspector's Training Class!
			</Typography>
			<Box
				sx={{
					padding: "28px",
				}}>
				<Typography align="center" fontSize={20} variant={"body1"}>
					Hello I am Mr.Inspector, I am here to help you learn how you could use your browser's dev tools to be able to efficently
					debug errors.
				</Typography>
				<Typography my={2} align="center" fontSize={20} variant={"body1"}>
					I will first introduce you to your browser's dev tools and the objectives for clearing a mission. Once you have
					completed this stage you will be sent into missions to clear the rest of the training.
				</Typography>
				<Typography my={2} align="center" fontSize={20} variant={"body1"}>
					If you are an experienced user, you can skip straight to the missions.
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Button
						onClick={() => setStage(1)}
						sx={{
							margin: "8px",
						}}
						size="large"
						variant="outlined">
						Tools
					</Button>
					<Button
						onClick={() => setStage(3)}
						sx={{
							margin: "8px",
						}}
						size="large"
						variant="outlined">
						Missions
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export const StageWelcomePlayground = ({ setStage }) => {
	return (
		<Box
			sx={{
				display: "flex",
				contain: "content",
				alignItems: "center",
				justifyContent: "center",
				overflow: "hidden",
			}}>
			<Image
				alt="Inspector"
				width={"785"}
				height={"486"}
				src={"https://www.creativetourist.com/app/uploads/2019/12/b181a1599324b946068bcc1e51a4281b-785x486.jpg"}
			/>
		</Box>
	)
}
