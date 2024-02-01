import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Phone } from "@/images/index";
import LaptopBackground from "@/components/atoms/LaptopBackground";
import SignInPage from "@/pages/accounts/signin";
import MainPage from "@/pages/main";

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
