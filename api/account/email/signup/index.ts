export interface CheckEmailAvailableRequest {
  email: string;
}

export interface CheckEmailAvailableResponse {
  available: boolean;
}

export interface CheckNicknameAvailableRequest {
  nickname: string;
}

export interface CheckNicknameAvailableResponse {
  available: boolean;
}

export interface RequestEmailCertRequest {
  email: string;
  pw: string;
  nickname: string;
}

export interface RequestEmailCertResponse {
  result: boolean;
}

export interface SignUpParams {
  certSerial: string;
}
