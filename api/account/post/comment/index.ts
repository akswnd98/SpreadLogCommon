export interface GetCommentsRequest {
  postId: number;
}

export interface GetCommentsResponse {
  list: {
    id: number;
    accountId: number;
    accountNickname: string;
    body: string;
    firstUpload: string;
  }[];
}
