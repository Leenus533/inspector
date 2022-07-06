import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

// Create a theme instance.
const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "rgba(255, 255, 255, 1)",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: red.A400,
		},
	},
})

export default theme
