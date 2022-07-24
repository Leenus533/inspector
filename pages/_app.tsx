import * as React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider } from "@emotion/react"
import theme from "../src/theme"
import createEmotionCache from "../src/createEmotionCache"
import "../src/styles.css"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>Mr.Inspector</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<meta
					name="description"
					content="This is Mr.Inspector training class. Its is a quick and short introduction to get comfortable using the browser dev tools."
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
}
