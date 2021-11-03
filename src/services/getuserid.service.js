import http from "../http-common";

class UserIdDataService{
    get(username){
        return http.get(`/registerusers/${username}`);
    }
}

export default new UserIdDataService();