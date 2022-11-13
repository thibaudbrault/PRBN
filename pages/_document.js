import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: [
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>,
				],
			}
		} finally {
			sheet.seal()
		}
	}

	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta
						name='description'
						content='Listen to every pokémon games ost'
					/>
					<link rel='shortcut icon' href='/favicon.ico' />
					<link
						href='https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Wendy+One&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
