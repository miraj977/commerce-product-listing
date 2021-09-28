import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document
{
    static async getInitialProps ( ctx )
    {
        const initialProps = await Document.getInitialProps( ctx );
        return { ...initialProps };
    }

    render ()
    {
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/png" href="/favicon.png" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
                </Head>
                <body className="relative min-h-screen pb-14">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;