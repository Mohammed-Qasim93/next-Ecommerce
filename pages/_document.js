import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const styles = {
      "::-webkit-scrollbar": {
        width: "3px",
      },
      "::-webkit-scrollbar-track": {
        background: "red",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#432432",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#875765",
      },
    };
    return (
      <Html lang="en">
        <Head />

        <body className={`bg-bodyColor ${styles}`}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
