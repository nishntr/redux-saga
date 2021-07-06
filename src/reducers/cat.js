const initialState = {
    cat: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "LoadCatSaga":
            return {
                ...state,
                cat: action.payload
            };


        case "Clear":
            return {
                ...state,
                cat: {}
            }
        default:
            return state;
    }
}