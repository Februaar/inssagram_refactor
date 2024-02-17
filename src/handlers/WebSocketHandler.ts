import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { useEffect, useRef } from "react";
import { PostMessageState } from "@/types/ChatRoomTypes";

interface WebSocketHandlerProps {
  accessToken: string | null;
  roomId: string;
  newMessage: PostMessageState[] | null;
  onMessageReceived: (messages: any) => void;
}

const WebSocketHandler: React.FC<WebSocketHandlerProps> = ({
  accessToken,
  roomId,
  newMessage,
  onMessageReceived,
}) => {
  const stompClientRef = useRef<Stomp.Client | null>(null);
  const connectedRef = useRef<boolean>(false);

  useEffect(() => {
    const socket = new SockJS("https://api.inssagram.shop/ws-stomp");
    const stompClient = Stomp.over(socket);

    const connectCallback = () => {
      console.log("WebSocket connected!");
      connectedRef.current = true;

      // 구독 설정
      stompClient.subscribe(
        `/exchange/chat.exchange/room.${roomId}`,
        (message: any) => {
          try {
            const receivedMessage = JSON.parse(message.body);
            console.log("received message:", message.body);
            onMessageReceived(receivedMessage);
          } catch (error) {
            console.error("Error parsing received message:", error);
          }
        }
      );

      // 새로운 메시지 전송
      if (newMessage) {
        stompClient.send(
          `/pub/chat.message.${roomId}`,
          { token: accessToken },
          JSON.stringify(newMessage)
        );
      }
    };

    if (accessToken) {
      stompClient.connect({ token: accessToken }, connectCallback);
      stompClientRef.current = stompClient;
    }

    return () => {
      if (stompClientRef.current && connectedRef.current) {
        stompClientRef.current.disconnect(() => {
          console.log("Stomp client disconnected!");
          connectedRef.current = false; // 연결 종료 상태로 설정
        });
      }
    };
  }, [accessToken, roomId, newMessage, onMessageReceived]);

  return null;
};

export default WebSocketHandler;
