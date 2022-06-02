export interface LoginRequest {
  email: string;
  pw: string;
}

export interface LoginResponse {
  result: boolean;
}

export interface CheckIsLoggedInRequest {
}

export interface CheckIsLoggedInResponse {
  result: boolean;
}
