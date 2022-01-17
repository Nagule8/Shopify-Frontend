import http from "../http-common";

class CategoryDataService{
    getAll(){
        return http.get("/categories");
    }
    get(id){
        return http.get(`/categories/${id}`);
    }
    create(data) {
        return http.post("/categories", data,{ withCredentials: true });
    }
    
    update(id, data) {
    return http.put(`/categories/${id}`, data,{ withCredentials: true });
    }

    delete(id) {
    return http.delete(`/categories/${id}`, { withCredentials: true });
    }
}

export default new CategoryDataService();