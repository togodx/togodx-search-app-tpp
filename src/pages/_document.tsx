import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'


export default class Document extends NextDocument {
  // static getInitialProps({ renderPage }) {
  //   const sheet = new ServerStyleSheet();
  //
  //   const page = renderPage(App => props =>
  //     sheet.collectStyles(<App {...props} />),
  //   );
  //
  //   const styleTags = sheet.getStyleElement();
  //
  //   return { ...page, styleTags };
  // }

  render() {
    return (
      <Html>
        <Head>
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          /> */}
          {/* <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          /> */}
          {/* <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          /> */}
          {/* <link rel="manifest" href="/favicon/site.webmanifest" /> */}
          {/* <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          /> */}
          {/* <meta name="msapplication-TileColor" content="#da532c" /> */}
          {/* <meta name="theme-color" content="#ffffff"></meta> */}
          {/* <title>{title}</title> */}
          {/* <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0"
          /> */}
          {/* <meta name="description" content={description} /> */}
          {/* <meta property="og:url" content={url} /> */}
          {/* <meta property="og:title" content={title} /> */}
          {/* <meta property="og:site_name" content={title} /> */}
          {/* <meta property="og:description" content={description} /> */}
          {/* <meta property="og:type" content="website" /> */}
          {/* <meta property="og:image" content="/images/org.png" /> */}
          {/* <meta property="og:image:width" content={String(imgWidth)} /> */}
          {/* <meta property="og:image:height" content={String(imgHeight)} />  */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
