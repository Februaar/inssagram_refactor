export interface UserState {
  memberId: string;
  memberNickname: string;
  memberProfile: string;
  memberFollowerCounts: string;
  memberPostCounts: string;
  memberFollowState: boolean;
}

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

export interface MessageState {
  type: string;
  chatMessageId: number;
  chatRoomId: number;
  createdAt: string;
  image: string;
  memberIdInShareObject: number;
  memberNicknameInShareObject: string;
  memberProfileInShareObject: string | null;
  message: string;
  receiverNickname: string;
  senderMemberId: number;
  senderNickname: string;
  senderProfile: string | null;
  shareObjectContents: string;
  shareObjectId: number;
  shareObjectImage: string;
  sharePostType: string;
}

export interface PostMessageState {
  type: string;
  chatRoomId: string;
  receiverMemberId: string;
  message: string;
}
