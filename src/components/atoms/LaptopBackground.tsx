import { useState, useEffect } from "react";
import styled from "styled-components";

const LaptopBackground = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["개발자", "기획자", "디자이너"];

  const changeText = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeText();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <TitleContainer>
        <div className="title-container">
          <span>IT 분야의[</span>
          <div className="changing-wording">
            <h1>{texts[textIndex]}</h1>
          </div>
          <span>]와 소통하다</span>
        </div>
      </TitleContainer>
      <TextContainer>
        <div>
          <p>다양한 분야의 동료들을 만날 수 있는 소셜 플랫폼</p>
        </div>
      </TextContainer>
    </Container>
  );
};

export default LaptopBackground;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 20%;

  span {
    font-size: 45px;
    line-height: 45px;
  }

  .changing-wording {
    font-size: 45px;
    transform: translate3d(0, 0, 0);

    h1 {
      font-size: 1em;
      font-weight: 600;
      text-align: center;
      color: #f7cac9;

      .letter {
        position: relative;
        bottom: 1.2em;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .title-container {
      display: none;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    .title-container {
      display: flex;
      flex-direction: column;
    }

    .changing-wording {
      h1 {
        font-size: 35px;
        padding: 12px 0;
      }
    }
  }

  @media screen and (min-width: 1201px) {
    .title-container {
      display: flex;
      flex-direction: row;
    }

    .changing-wording {
      font-size: 40px;
      height: 40px;

      h1 {
        width: 200px;
      }
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0;

  p {
    font-size: 24px;
  }
`;
