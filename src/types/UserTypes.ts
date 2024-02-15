export interface UserState {
  member_id: any;
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
  friendStatus: boolean;
  followers: [
    {
      followerId: number;
      followerName: string;
      followerImage: string;
    }
  ];
  following: [
    {
      following_Id: number;
      following_Name: string;
      following_Image: string;
    }
  ];
}

export interface LikedPostMemberData {
  memberId: string;
  memberNickname: string;
  memberProfile: string;
  followedState: boolean;
}

export interface RecommendationsData {
  member_id: string;
  email: string;
  nickname: string;
  job: string;
  image: string;
}
