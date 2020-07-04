import { GET_IMAGES, GET_IMAGE, IMAGE_ERRORS } from "../actions/types";

const initialState = {
    query: "",
    image: null,
    images: [],
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_IMAGES:
            return {
                ...state,
                images: action.payload.results,
                query: action.payload.query,
                loading: false,
            };
        case GET_IMAGE:
            return {
                ...state,
                image: action.payload,
                loading: false,
            };
        case IMAGE_ERRORS:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
