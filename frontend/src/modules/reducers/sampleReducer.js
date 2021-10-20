// Define the initial state
const initialState = {
    title: 'initTitle'
};

const sample = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SAMPLEDATA': 
            return {
                ...state,
                title: payload,
            };
        default:
            return state;
    }
};

export default sample;