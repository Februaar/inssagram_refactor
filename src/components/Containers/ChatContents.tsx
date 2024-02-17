import { MessageState, PostMessageState } from "@/types/ChatRoomTypes";
import { MyMessage, YourMessage } from "@/components/Items/Message";

interface ChatContentsProps {
  user: any;
  messages: MessageState[] | null;
  newMessage: PostMessageState[];
}

const ChatContentsContainer: React.FC<ChatContentsProps> = ({
  user,
  messages,
  newMessage,
}) => {
  console.log(newMessage);
  return (
    <>
      {messages &&
        messages.map((message) =>
          message.senderMemberId === user.member_id ? (
            <MyMessage key={message.chatMessageId} message={message} />
          ) : (
            <YourMessage key={message.chatMessageId} message={message} />
          )
        )}
      {newMessage &&
        newMessage.map((message, index) => {
          <MyMessage key={index} message={message} />;
        })}
    </>
  );
};

export default ChatContentsContainer;
