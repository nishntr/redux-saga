const initialState = {
    abilities: [],
    loading: true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "LoadDetail":
            return {
                ...state,
                abilities: action.payload.abilities,
                loading: false
            };



        case "ClearDetail":
            return {
                ...state,
                abilities: [],
                loading: true
            }
        default:
            return state;
    }
}