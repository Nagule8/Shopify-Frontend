import http from "../http-common";

class CartDataService{
    getAll(userId){
        return http.get(`/cartitems?userId=${userId}`, { withCredentials: true });
    }
    get(id){
        return http.get(`/cartitems/${id}`);
    }
    create(data) {
        return http.post("/cartitems", data, { withCredentials: true });
    }
    
    update(id, quantity) {
        return http.put(`/cartitems/Increase/${id}?quantity=${quantity}`, { withCredentials: true });
    }

    delete(id) {
        return http.delete(`/cartitems/${id}`, { withCredentials: true });
    }
}

export default new CartDataService();