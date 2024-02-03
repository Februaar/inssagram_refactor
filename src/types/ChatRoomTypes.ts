export interface ChatRoomState {
  sender_id: number;
  sender_image: string;
  sender_name: string;
  chatroom_id: number;
  created_at: string;
  friend_status: boolean;
  list_id: number;
  message: string;
  read_status: boolean;
}

export interface UserState {
  memberId: string;
  memberNickname: string;
  memberProfile: string;
  memberFollowerCounts: string;
  memberPostCounts: string;
  memberFollowState: boolean;
}
