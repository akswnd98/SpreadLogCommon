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
