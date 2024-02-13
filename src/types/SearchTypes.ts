export interface SearchResultData {
  memberId: string;
  email: string;
  nickName: string;
  job: string;
  image: string;
  friendStatus: boolean;
}

export interface SearchHistoryData {
  memberId: string;
  searched: string;
  job: string;
  friendStatus: boolean;
  image: string;
}
