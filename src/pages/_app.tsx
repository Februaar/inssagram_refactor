import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SignUpProvider } from "@/context/SignUp";
import Image from "next/image";
import styled from "styled-components";
import { Phone } from "@/images";
import LaptopBackground from "@/components/atoms/LaptopBackground";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <SignUpProvider>
        <Container>
          <LaptopContainer>
            <LeftWrap>{/* <LaptopBackground /> */}</LeftWrap>
            <RightWrap>
              <Image src={Phone} className="phone-img" alt="phone" />
              <PhoneFrame>
                <Component {...pageProps} />
              </PhoneFrame>
            </RightWrap>
          </LaptopContainer>
        </Container>
      </SignUpProvider>
    </Provider>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LaptopContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LeftWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 980px;
  transform: scale(1);

  @media (max-width: 1520px) {
    min-width: auto;
    transform: scale(0.9);
    flex: unset;
  }
  @media (max-width: 1400px) {
    transform: scale(0.8);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightWrap = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  .phone-img {
    position: absolute;
    width: 430px;
    height: 932px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const PhoneFrame = styled.div`
  position: relative;
  width: 375px;
  height: 812px;

  @media (min-width: 360px) and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
