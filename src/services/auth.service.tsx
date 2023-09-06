import http from "../http-common";

class AuthDataService {
  // Send SMS API Call By Phone Number
  invite(data: { username: string }) {
    return http.post("user/invite", data);
  }

  // Call SMS Code Verification API By Phone Number and Code
  confirm(data: { username: string; code: string }) {
    return http.post("user/confirm", data);
  }
}

export default new AuthDataService();
