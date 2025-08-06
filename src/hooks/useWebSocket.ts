import { useEffect, useRef, useCallback } from "react";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { PostMessageState } from "@/types/ChatRoomTypes";

const useWebSocket = ({
  roomId,
  onMessageReceived,
}: {
  roomId: string;
  onMessageReceived: (message: any) => void;
}) => {
  const stompClientRef = useRef<Stomp.Client | null>(null);
  const connectedRef = useRef(false);

  const sendMessage = useCallback(
    (message: PostMessageState) => {
      const token = sessionStorage.getItem("token");
      if (connectedRef.current && stompClientRef.current) {
        stompClientRef.current.send(
          `/pub/chat.message.${roomId}`,
          { token },
          JSON.stringify(message)
        );
      }
    },
    [roomId]
  );

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const socket = new SockJS("https://api.inssagram.shop/ws-stomp");
    const stompClient = Stomp.over(socket);

    stompClient.connect({ token }, () => {
      connectedRef.current = true;
      stompClient.subscribe(
        `/exchange/chat.exchange/room.${roomId}`,
        (message) => {
          try {
            const data = JSON.parse(message.body);
            onMessageReceived(data);
          } catch (e) {
            console.error("Parsing error:", e);
          }
        }
      );
    });
    
    stompClientRef.current = stompClient;

    return () => {
      if (stompClientRef.current && connectedRef.current) {
        stompClientRef.current.disconnect(() => {
          connectedRef.current = false;
        });
      }
    };
  }, [roomId, onMessageReceived]);

  return {
    sendMessage,
  };
};

export default useWebSocket;
