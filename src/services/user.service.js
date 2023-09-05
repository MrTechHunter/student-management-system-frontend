import http from "../http-common";

class UserDataService {
  invite(data) {
    return http.post("user/invite", data);
  }
}

export default new UserDataService();
