export type NodeDataType = {
  id: number;
  title: string;
};

export type EdgeDataType = {
  id: number;
  fromId: number;
  toId: number;
};

export type GetAllNodeSummary = {
  ret: NodeDataType[];
};

export interface GetAllEdge {
  ret: EdgeDataType[];
};

export interface AppendPostNodeRequest {
  title: string;
  body: string;
};

export interface AppendPostNodeResponse {
  id: number;
};

export interface DeleteByIdRequest {
  id: number;
};

export interface DeleteByIdResponse {
  error: boolean;
};

export interface AppendPostEdgeRequest {
  fromId: number;
  toId: number;
};

export interface AppendPostEdgeResponse {
  id: number;
};

export interface DeleteEdgeByIdRequest {
  id: number;
};

export interface DeleteEdgeByIdResponse {
  error: boolean;
};

export interface GetByIdRequest {
  id: number;
};

export interface GetByIdResponse {
  ret: {
    id: number;
    title: string;
    body: string;
    firstUpload: string;
    lastUpdate: string;
  };
};

export interface UpdatePostRequest {
  id: number;
  title: string;
  body: string;
};

export interface UpdatePostResponse {
  error: boolean;
};
