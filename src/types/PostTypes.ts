export interface PostContentData {
  type: string;
  postId: number;
  memberId: number;
  nickName: string;
  memberImage: string;
  image: string[];
  contents: string;
  location: string;
  likeCount: number;
  commentsCounts: number;
  taggedMemberIds: number;
  hashTags: string[];
  createdAt: string;
  postLike: boolean;
  bookmarked: boolean;
  followed: boolean;
}

export interface CreateBoardData {
  type: string;
  image: string[];
  fileName: string[];
  contents: string;
}

export interface OriginalCommentData {
  nickName: string;
  memberId: number;
  memberImage: string;
  contents: string;
  postId: number;
  postLike: boolean;
  createdAt: string;
  followed: boolean;
  hashTags: string[];
  likeCount: number;
  location: string;
  taggedMemberIds: string[];
}

export interface CommentData {
  nickname: string;
  memberId: number;
  memberImage: string;
  content: string;
  parentId: number;
  postId: number;
  createdAt: string;
  likeCount: number;
  commentId: number;
  commentLike: boolean;
  commentCount: number;
  mentionList: string[];
  replyFlag: boolean;
}
