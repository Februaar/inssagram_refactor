import Image from "next/image";
import { noProfile } from "@/images";
import { ChatHistoryData } from "@/types/ChatRoomTypes";
import styled from "styled-components";

interface DirectItemProps {
  history: ChatHistoryData;
}

const DirectItem: React.FC<DirectItemProps> = ({ history }) => {
  return (
    <>
      <Message>
        <Image
          src={history.senderProfile ? history.senderProfile : noProfile}
          alt="profile-image"
          width={28}
          height={28}
          style={{ borderRadius: "100%" }}
        />
        <div className="content">{history.message}</div>
      </Message>
    </>
  );
};

export default DirectItem;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;

  .content {
    align-self: flex-end;
    max-width: 245px;
    border-radius: 8px;
    background-color: #92a8d1;
    // background-color: #f7cac9;
    color: #ffffff;
    padding: 8px;
    margin: 4px;
  }
`;
