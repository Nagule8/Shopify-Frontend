import http from "../http-common";

class CartDataService{
    getAll(userId){
        return http.get(`/cartitems?userId=${userId}`, { withCredentials: true });
    }
    get(id){
        return http.get(`/cartitems/${id}`);
    }
    create(data) {
        return http.post("/cartitems", 
        data);
    }
    
    update(id, data) {
    return http.put(`/cartitems/increase/${id}?quantity=${data}`);
    }

    delete(id) {
    return http.delete(`/cartitems/${id}`);
    }
}

export default new CartDataService();