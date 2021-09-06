import axios from 'axios';

const API_HOST = process.env.VUE_APP_API_HOST;

export default class ImageService {
    postImage({ title, image, description }) {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        formData.append('description', description);
        return axios.post(`${API_HOST}/api/image`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    getImage() {
        return axios.get(`${API_HOST}/api/image`);
    }
};