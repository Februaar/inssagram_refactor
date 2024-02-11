import Image from "next/image";
import { MessageState, PostMessageState } from "@/types/ChatRoomTypes";
import { noProfile } from "@/images";
import styled from "styled-components";
import MyMessage from "@/components/Items/MyMessage";

interface ChatContentsProps {
  user: any;
  messages: MessageState[];
  newMessage: PostMessageState | null;
}

const ChatContentsContainer: React.FC<ChatContentsProps> = ({
  user,
  messages,
  newMessage,
}) => {
  return (
    <>
      {messages &&
        messages.map((message) =>
          message.senderMemberId === user.member_id ? (
            <MyMessage key={message.chatMessageId} message={message} />
          ) : (
            <Message key={message.chatMessageId}>
              <div className="message-card" role="none">
                <div className="sender-profile">
                  <Image
                    src={
                      message.senderProfile ? message.senderProfile : noProfile
                    }
                    alt="profile-image"
                    width={28}
                    height={28}
                    style={{ borderRadius: "100%" }}
                  />
                </div>
                <div className="message-area">
                  <div className="message messages">{message.message}</div>
                  <div className="message between"></div>
                  <div className="message"></div>
                </div>
                <div className="spacing"></div>
              </div>
            </Message>
          )
        )}
      {newMessage ? <MyMessage message={newMessage} /> : null}
    </>
  );
};

export default ChatContentsContainer;

const Message = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 34px;
  margin-bottom: 2px;

  .message-card {
    display: flex;
    height: 100%;

    .sender-profile {
      flex-grow: 0;
      display: flex;
      flex-direction: column;
      align-self: stretch;
      justify-content: flex-end;
      padding-right: 8px;
      padding-left: 14px;
      max-width: 100%;
      background-color: #ffffff;
    }

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

      .messages {
        position: relative;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        vertical-align: baseline;
        padding: 7px 12px;
        background-color: #f7cac9;
        border-top-right-radius: 18px;
        border-top-left-radius: 18px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 18px;
        // border-bottom-right-radius: 4px;
        min-width: 15px;
        // max-width: 100%;
      }

      .between {
        flex-grow: 0;
        max-width: 100%;
      }

      .sended {
        // flex-grow: 1;
        padding: 7px 12px;
        background-color: #92a8d1;
        border-top-right-radius: 18px;
        border-top-left-radius: 18px;
        border-bottom-left-radius: 18px;
        // border-bottom-right-radius: 18px;
        border-bottom-right-radius: 4px;
        // max-width: 100%;
      }
    }

    .spacing {
      width: 16px;
    }
  }
`;

// .content {
//   display: flex;
//   flex-direction: column;
//   align-items: inherit;
//   align-self: stretch;
//   justify-content: flex-end;
//   color: #ffffff;}
