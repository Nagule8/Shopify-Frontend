import http from "../http-common";

class ProductDataService{
    getAll(){
        return http.get("/items");
    }
    get(id){
        return http.get(`/items/${id}`);
    }
    create(data) {
        return http.post("/items", data, { withCredentials: true });
    }
    
    update(id, data) {
    return http.put(`/items/${id}`, data,{ withCredentials: true });
    }

    delete(id) {
    return http.delete(`/items/${id}`,{ withCredentials: true });
    }
}

export default new ProductDataService();