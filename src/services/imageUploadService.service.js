import http from "../http-common";

class ImageUploadService{
    create(data) {
        return http.post("/imageupload", 
        data);
    }
}

export default new ImageUploadService();