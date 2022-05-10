import Document, { Html, Head, Main, NextScript } from 'next/document'
import type {DocumentContext}  from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx:DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="preconnect"  />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="preconnect" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument