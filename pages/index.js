import Head from "next/head";

import Layout from "../components/layout/layout";
import Header from "../components/header/header";

export default function IndexPage() {

    return (
        <Layout>
            <Head>
                <title>Music market</title>
            </Head>
            <Header />
        </Layout>
    );

}
