import { createStore } from 'vuex'
import ImageService from '../services/ImageService';

const imageService = new ImageService;

const store = createStore({
    state() {
        return {
            image: {
                title: '',
                image_path: null,
                description: ''
            }
        };
    },
    mutations: {
        setImage(state, payload) {
            state.image = payload;
        }
    },
    actions: {
        async getImage({ commit }) {
            console.log('tes');
            const image = await imageService.getImage().then(({ data }) => data.data);
            image.image_path = `${process.env.VUE_APP_API_HOST}/${image.image_path}`;
            commit('setImage', image);
        }
    }
});

export default store;