export interface AddNodeRequest {
  title: string;
}

export interface AddNodeResponse {
  id: number;
  firstUpload: string;
  lastUpdate: string;
  accountId: number;
}

export interface AddEdgeRequest {
  fromId: number;
  toId: number;
}

export interface AddEdgeResponse {
  id: number;
  fromId: number;
  toId: number;
  accountId: number;
}

export interface DeleteEdgeRequest {
  id: number;
}

export interface DeleteNodeRequest {
  id: number;
}

export interface PublishPostRequest {
  id: number;
  title: string;
  body: string;
}

export interface PublishPostResponse {
  
}
