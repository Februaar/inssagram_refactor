import { MessageState } from "@/types/ChatRoomTypes";
import { MyMessage, YourMessage } from "@/components/Items/Message";

interface ChatContentsProps {
  user: any;
  messages: MessageState[];
}

const ChatContentsContainer: React.FC<ChatContentsProps> = ({
  user,
  messages,
}) => {
  return (
    <>
      {messages.map((message) =>
        message.senderMemberId === user.member_id ? (
          <MyMessage
            key={message.chatMessageId || Math.random()}
            message={message}
          />
        ) : (
          <YourMessage
            key={message.chatMessageId || Math.random()}
            message={message}
          />
        )
      )}
    </>
  );
};

export default ChatContentsContainer;
