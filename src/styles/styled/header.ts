import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1.5px solid #dbdbdb;
  width: 100%;
  height: 44px;
  padding: 0 16px;
  z-index: 10;
`;

export const Logo = styled.h1`
  font-size: 25px;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 58px;
  height: 24px;
`;

export const CreateIcon = styled.button``;

export const NotificationIcon = styled.button``;

// export const NotiAlarm = styled.span`
//   position: absolute;
//   top: 10px;
//   right: 15px;
//   width: 10px;
//   height: 10px;
//   border: 1.5px solid #fff;
//   border-radius: 50%;
//   color: #ffffff;
//   background-color: red;
//   z-index: 100;
// `;

// export const SpeechBubble = styled.div`
//   z-index: 1000;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   right: -6px;
//   top: 45px;
//   height: 33px;
//   min-width: 46px;
//   max-width: 50px;
//   padding: 5px;
//   border-radius: 7px;
//   background: #ff3040;
//   color: #ffffff;

//   &::before {
//     content: "";
//     position: absolute;
//     bottom: 100%;
//     left: 50%;
//     border-width: 8px;
//     border-style: solid;
//     border-color: transparent transparent #ff3040;
//     transform: translateX(-20%);
//   }
// `;

// export const NotiCount = styled.span`
//   padding-left: 2px;
// `;

// export const Modal = styled.div`
//   position: absolute;
//   right: 5%;
//   top: 100%;
//   width: 150px;
//   height: 80px;
//   background-color: white;
//   border: 1px solid gray;
//   border-radius: 10px;
// `;

// export const CreateBoard = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   width: 100%;
//   height: 50%;
//   font-size: 20px;
//   border-bottom: 2px solid gray;
// `;
// export const CreateStory = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   width: 100%;
//   height: 50%;
//   font-size: 20px;
// `;
