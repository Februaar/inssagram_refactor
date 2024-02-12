import React, { useEffect, useRef } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { PostMessageState } from "@/types/ChatRoomTypes";

interface WebSocketHandlerProps {
  accessToken: string | null;
  roomId: string;
  newMessage: PostMessageState | null;
  onMessageReceived: (messages: any) => void;
}

const WebSocketHandler: React.FC<WebSocketHandlerProps> = ({
  accessToken,
  roomId,
  newMessage,
  onMessageReceived,
}) => {
  const stompClientRef = useRef<Stomp.Client | null>(null);

  useEffect(() => {
    const socket = new SockJS("https://api.inssagram.shop/ws-stomp");
    const stompClient = Stomp.over(socket);

    const connectCallback = () => {
      console.log("WebSocket connected!");

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
    };

    // WebSocket 연결
    if (accessToken) {
      stompClient.connect({ token: accessToken }, connectCallback);

      stompClientRef.current = stompClient;
    }

    // 컴포넌트 언마운트 시 연결 해제
    return () => {
      if (stompClient.connected) {
        stompClient.disconnect(() => {
          console.log("Stomp client disconnected!");
        });
      }
    };
  }, [accessToken, roomId, onMessageReceived]);

  // 새로운 메시지 전송
  useEffect(() => {
    if (newMessage && stompClientRef.current) {
      stompClientRef.current.send(
        `/pub/chat.message.${roomId}`,
        { token: accessToken },
        JSON.stringify(newMessage)
      );
    }
  }, [newMessage, accessToken, roomId]);

  return null;
};

export default WebSocketHandler;
