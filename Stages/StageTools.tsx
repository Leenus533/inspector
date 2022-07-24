import { Box, List, ListItem, Typography, ListItemText, Button } from "@mui/material"
import Image from "next/image"

export const StageToolsInfo = ({ setStage }) => {
	return (
		<Box>
			<Typography py={2} my={2} align="center" variant="h4">
				Tools
			</Typography>
			<Box p={4}>
				<Typography fontSize={18} variant="body1">
					Browsers have powerfull tools to allow you to inspect the code and allow you to manipulate the code straight from the
					browser itself.
				</Typography>
				<Typography my={2} fontSize={18} variant="body1">
					The default keybinding to open the browser dev tools is F12. You should also be able to right click on the page and
					click on inspect
				</Typography>
				<Typography my={2} fontSize={18} variant="body1">
					The Elements tab in the browser dev tools allows you to see the HTML elements on the page. Clicking on an element will
					allow you to see the CSS styles applied to it. Hovering over an element will highlight the element on the webpage and
					will also quickly and visually highlight some of the style effects on the element such as padding and margin.
				</Typography>
				<Typography my={2} fontSize={18} variant="body1">
					You can edit style of the element directly from the styles of the tab. This will become very useful when you are trying
					to find and fix and CSS errors.
				</Typography>
				<Typography my={2} fontSize={18} variant="body1">
					The Sources tab in the browser dev tools allows you to see the code of the page. This is useful for viewing the
					javascript code being used on the website. You will also be able to setup breakpoints to help and manipulate the
					javascript code aswell to help find vulnerabilities or javascript bugs.
				</Typography>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Button onClick={() => setStage(2)} size="large" variant="outlined">
						Objectives{" "}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export const StageToolsPlayground = ({ setStage }) => {
	return (
		<Box>
			<Typography py={2} my={2} align="center" variant="h6">
				Dev Tools
			</Typography>
			<Image src="/images/devtools.webp" width={1280} height={720} />
			<Typography py={2} my={2} align="center" variant="h6">
				Editing Styles - Making Title color red
			</Typography>
			<Image src="/images/editingstyles.webp" width={1236} height={150} />
		</Box>
	)
}
