import Head from "next/head";
import SignInPage from "@/pages/accounts/signin";

const Home = () => {
  return (
    <>
      <Head>
        <title>Inssagram</title>
        <meta name="description" content="community platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignInPage />
    </>
  );
};

export default Home;
