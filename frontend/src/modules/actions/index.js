import * as types from "./ActionTypes";
import axios from "axios";

export const getSampleData = () => async (dispatch) => {
    try {
        let res = await axios.get('http://127.0.0.1:8000/api/test/');
        dispatch({
            type: types.SAMPLEDATA,
            payload: res.data,
        });
    } catch (e) {
        dispatch({
            type: types.ERROR,
        });
    }
};