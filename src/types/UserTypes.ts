export interface UserState {
  member_id: string;
  email: string;
  nickname: string;
  job: string;
  image: string;
}

export interface UserPageData {
  email: string;
  nickname: string;
  companyName: string;
  profilePic: string;
  description: string;
  followers: [];
  following: [];
  posts: any;
}

export interface LikedPostMemberData {
  memberId: string;
  memberNickname: string;
  memberProfile: string;
  followedState: boolean;
}
