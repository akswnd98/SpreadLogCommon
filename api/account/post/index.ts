import { NamedTupleMember, NumberLiteralType } from "typescript";

export interface GetAllPostNodesRequest {
  nickname: string;
}

export interface GetAllPostNodesResponse {
  list: {
    id: number;
    title: string;
    accountId: number,
    firstUpload: string,
    lastUpdate: string,
  }[],
}

export interface GetAllPostEdgesRequest {
  nickname: string;
}

export interface GetAllPostEdgesResponse {
  list: {
    id: number;
    fromId: number;
    toId: number;
  }[],
}

export interface GetPostRequest {
  id: number;
}

export interface GetPostResponse {
  id: number;
  accountId: number;
  title: string;
  body: string;
  firstUpload: string;
  lastUpdate: string;
}

export interface GetAllPrevPostMetadatasRequest {
  id: number;
}

export interface GetAllPrevPostMetadatasResponse {
  list: {
    id: number;
    title: string;
  }[];
}
