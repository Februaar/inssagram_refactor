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
            <div
              className="sender"
              style={{ fontWeight: list.read_status ? "500" : "600" }}
            >
              {list.sender_name}
            </div>
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
          </div>
          {list.read_status ? <p className="mark" /> : null}
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
    justify-content: center;
    width: 100%;
    height: 100%;

    .sender {
      padding-bottom: 3px;
    }

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
        // max-width: 22px;
        overflow: hidden;
      }
    }
  }

  .mark {
    position: absolute;
    top: 50%;
    right: 25px;
    width: 10px;
    height: 10px;
    background-color: #0095f6;
    border-radius: 100%;
  }
`;
