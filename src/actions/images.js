import axios from "axios";

import { GET_IMAGES, GET_IMAGE, IMAGE_ERRORS } from "../actions/types";

// for getting images
export const getImages = (query) => async (dispatch) => {
    try {
        // get all posts
        const res = await axios.get(
            `https://api.unsplash.com/search/photos?page=1&per_page=24&query=${query}&orientation=landscape&client_id=NoHIArWkg7uxNyQVANRhe3JkfXIeH00JJjTr31qL64Q`
        );

        dispatch({
            type: GET_IMAGES,
            payload: { results: res.data.results, query: query },
        });
    } catch (error) {
        // send the error data to reducer
        dispatch({
            type: IMAGE_ERRORS,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            },
        });
    }
};

// for getting a single image
export const getImage = (photoId) => async (dispatch) => {
    try {
        // get all posts
        const res = await axios.get(
            `https://api.unsplash.com/photos/${photoId}?client_id=NoHIArWkg7uxNyQVANRhe3JkfXIeH00JJjTr31qL64Q`
        );

        dispatch({
            type: GET_IMAGE,
            payload: res.data,
        });
    } catch (error) {
        // send the error data to reducer
        dispatch({
            type: IMAGE_ERRORS,
            payload: {
                msg: error.response.statusText,
                status: error.response.status,
            },
        });
    }
};
