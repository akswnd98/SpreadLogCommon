export interface WriteCommentRequest {
  postId: number;
  body: string;
}

export interface WriteCommentResponse {
  id: number;
  firstUpload: string;
}
