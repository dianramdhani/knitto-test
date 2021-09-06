import axios from 'axios';

export default class ImageService {
    postImage({ title, image, description }) {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        formData.append('description', description);
        return axios.post('http://localhost:8001/api/image', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    getImage() {
        return axios.get('http://localhost:8001/api/image');
    }
};