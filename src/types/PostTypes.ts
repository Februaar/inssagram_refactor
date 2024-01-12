export interface PostContentData {
  type: string;
  postId: number;
  memberId: number;
  nickName: string;
  memberImage: string;
  image: [];
  contents: string;
  location: string;
  likeCount: number;
  commentsCounts: number;
  taggedMemberIds: number;
  hashTags: [];
  createdAt: string;
  postLike: false;
  bookmarked: boolean;
  followed: boolean;
}

export interface CreateBoardData {
  type: string;
  image: string[];
  fileName: string[];
  contents: string;
}
