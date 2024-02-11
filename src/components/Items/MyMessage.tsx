import styled from "styled-components";
import { MessageState, PostMessageState } from "@/types/ChatRoomTypes";

interface MyMessageProps {
  message: MessageState | PostMessageState;
}

const MyMessage: React.FC<MyMessageProps> = ({ message }) => {
  return (
    <Message>
      <div className="message-card" role="none">
        <div className="message-area">
          <div className="message"></div>
          <div className="message between"></div>
          <div className="message sended">{message.message}</div>
        </div>
        <div className="spacing"></div>
      </div>
    </Message>
  );
};

export default MyMessage;

const Message = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 34px;
  margin-bottom: 2px;

  .message-card {
    display: flex;
    height: 100%;

    .message-area {
      flex-shrink: 1;
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      min-width: 0;

      .message {
        display: flex;
        flex-direction: column;
        align-items: inherit;
        align-self: stretch;
        justify-content: flex-end;
        font-size: 15px;
        color: #ffffff;
        background-color: #ffffff;
        word-break: break-word;
        overflow-wrap: break-word;
        overflow-y: hidden;
        overflow-x: hidden;
        z-index: 1;
      }

      .between {
        flex-grow: 0;
        max-width: 100%;
      }

      .sended {
        padding: 7px 12px;
        background-color: #92a8d1;
        border-top-right-radius: 18px;
        border-top-left-radius: 18px;
        border-bottom-left-radius: 18px;
        // border-bottom-right-radius: 18px;
        border-bottom-right-radius: 4px;
      }
    }

    .spacing {
      width: 16px;
    }
  }
`;
