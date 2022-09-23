import "../styles/global.scss";

import Head from "next/head";

export default function App({ Component, pageProps }) {

    console.log("aaa");

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}