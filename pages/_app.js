import '../styles/globals.css';
import Layout from "../components/layout/Layout";
import Head from 'next/head';



function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link
        rel="stylesheet"
        href={`https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap`}
      />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
