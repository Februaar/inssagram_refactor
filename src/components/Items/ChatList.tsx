import Image from "next/image";
import { formatData } from "@/utils/date";
import { ChatRoomState } from "@/types/ChatRoomTypes";
import { noProfile } from "@/images";
import styled from "styled-components";

interface ChatListItemProps {
  list: ChatRoomState;
  onClick: (id: number) => void;
}

const ChatListItem: React.FC<ChatListItemProps> = ({ list, onClick }) => {
  const formattedCreatedAt = formatData(new Date(list.created_at));

  return (
    <>
      {list && (
        <ItemContainer onClick={() => onClick(list.chatroom_id)}>
          <div className="profile">
            <Image
              src={list.sender_image ? list.sender_image : noProfile}
              alt="프로필"
              width={56}
              height={56}
              style={{ borderRadius: "100%" }}
            />
          </div>
          <div className="content-area">
            <div style={{ fontWeight: list.read_status ? "500" : "600" }}>
              {list.sender_name}
            </div>
            <div className="message-container">
              <div className="message-area">
                <div
                  className="message"
                  style={{
                    color: list.read_status ? "#737373" : "#222222",
                    fontWeight: list.read_status ? "500" : "600",
                  }}
                >
                  {list.message}
                </div>
                <p className="created-at">· {formattedCreatedAt}</p>
              </div>
              {list.read_status ? null : <div className="unread"></div>}
            </div>
          </div>
        </ItemContainer>
      )}
    </>
  );
};

export default ChatListItem;

const ItemContainer = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  width: 100%;
  height: 72px;
  cursor: pointer;

  .profile {
    height: 100%;
    padding-right: 12px;
  }

  .content-area {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 70%;

    .message-container {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;

      .message-area {
        display: flex;
        flex-direction: row;
        color: #737373;

        .message {
          max-width: 265px;
          height: 18px;
          padding-right: 12px;
        }

        .created-at {
          max-width: 100px;
          overflow: hidden;
        }
      }

      .unread {
        width: 10px;
        height: 10px;
        background-color: #92a8d1;
        border-radius: 100%;
      }
    }
  }
`;
