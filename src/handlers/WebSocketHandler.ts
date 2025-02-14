import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { useEffect, useRef } from "react";
import { PostMessageState } from "@/types/ChatRoomTypes";

interface WebSocketHandlerProps {
  roomId: string;
  newMessage: PostMessageState | null;
  onMessageReceived: (messages: any) => void;
}

const WebSocketHandler: React.FC<WebSocketHandlerProps> = ({
  roomId,
  newMessage,
  onMessageReceived,
}) => {
  const stompClientRef = useRef<Stomp.Client | null>(null);
  const connectedRef = useRef<boolean>(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    // SockJS를 이용해서 WebSocket 핸드셰이크를 수행(WebSocket을 직접 생성하는 대신)
    // 이 단계에서는 HTTP 헤더를 추가할 수 없음(SockJS가 헤더 설정을 지원하지 않음)
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
          { token: token },
          JSON.stringify(newMessage)
        );
      }
    };

    if (token) {
      stompClient.connect({ token: token }, connectCallback); // STOMP 프로토콜을 통해 토큰 전달
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
  }, [roomId, newMessage, onMessageReceived]);

  return null;
};

export default WebSocketHandler;
