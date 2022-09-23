import Head from "next/head";

import Layout from "../components/layout/layout";
import Header from "../components/header/header";
import Link from "next/link";

export default function IndexPage() {

    return (
        <Layout>
            <Head>
                <title>Music market</title>
            </Head>
            <Header />
            <Link href="/products/guitars/acoustic">
                <a>Acoustic guitars</a>
            </Link>
        </Layout>
    );

}
