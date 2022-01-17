import http from "../http-common";

class ImageUploadService{
    create(data) {
        return http.post("/images", data, {withCredentials:true});
    }
    getImage(data) {
        return http.get(`/images/image?imageName=${data}`);
    }
}

export default new ImageUploadService();