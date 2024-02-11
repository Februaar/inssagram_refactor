import React, { useEffect } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";

interface WebSocketHandlerProps {
  accessToken: string | null;
  roomId: number;
  onMessageReceived: (message: string) => void;
}

const WebSocketHandler: React.FC<WebSocketHandlerProps> = ({
  accessToken,
  roomId,
  onMessageReceived,
}) => {
  useEffect(() => {
    // WebSocket 연결 설정
    const socket = new SockJS("https://api.inssagram.shop/ws-stomp");
    const stompClient = Stomp.over(socket);

    const connectCallback = () => {
      console.log("WebSocket connected!");
      // 해당 방(roomId)에 구독(subscribe)
      stompClient.subscribe(
        `/exchange/chat.exchange/room.${roomId}`,
        (message) => {
          // 메시지가 도착하면 onMessageReceived 콜백 함수를 호출하여 실시간으로 처리
          onMessageReceived(message.body);
        }
      );
    };

    if (accessToken && roomId !== null) {
      // 웹소켓 연결
      stompClient.connect({ token: accessToken }, connectCallback);
    }

    // 컴포넌트가 언마운트될 때 웹소켓 연결을 해제합니다.
    return () => {
      if (stompClient.connected) {
        stompClient.disconnect(() => {
          console.log("Stomp client disconnected!");
        });
      }
    };
  }, [accessToken, roomId, onMessageReceived]);

  return null;
};

export default WebSocketHandler;
