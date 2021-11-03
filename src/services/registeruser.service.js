import http from "../http-common";

class RegisterUserDataService{
    getAll(){
        return http.get("/registerusers");
    }
    get(id){
        return http.get(`/registerusers/${id}`);
    }
    create(data) {
        return http.post("/registerusers", data);
    }
    
    update(id, data) {
    return http.put(`/registerusers/${id}`, data);
    }

    delete(id) {
    return http.delete(`/registerusers/${id}`);
    }

    login(data){
        return http.post("/registerusers/login", data,{ withCredentials: true });
    }
    logout(){
        return http.post("/registerusers/logout",null,{ withCredentials: true });
    }
}

export default new RegisterUserDataService();