import { createStore } from 'vuex'

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
        setImage(state, image) {
            state.image = image;
        }
    }
});

export default store;