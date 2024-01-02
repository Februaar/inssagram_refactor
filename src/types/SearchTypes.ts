export interface SearchResultData {
  memberId: number;
  email: string;
  nickName: string;
  job: string;
  friendStatus: boolean;
  image: string;
}

export interface SearchHistoryData {
  memberId: number;
  searched: string;
  job: string;
  friendStatus: boolean;
  image: string;
}