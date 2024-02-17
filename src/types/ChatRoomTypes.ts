export interface UserState {
  memberId: string;
  memberNickname: string;
  memberProfile: string;
  memberFollowerCounts: string;
  memberPostCounts: string;
  memberFollowState: boolean;
}

export interface ChatRoomState {
  sender_id: string;
  sender_image: string;
  sender_name: string;
  chatroom_id: string;
  created_at: string;
  friend_status: boolean;
  list_id: string;
  message: string;
  read_status: boolean;
}

export interface MessageState {
  type: string;
  chatMessageId: string;
  chatRoomId: string;
  createdAt: string;
  image: string;
  memberIdInShareObject: number;
  memberNicknameInShareObject: string;
  memberProfileInShareObject: string | null;
  message: string;
  receiverNickname: string;
  senderMemberId: string;
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
