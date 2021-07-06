const initialState = {
    urls: {},
    pokemons: [],
    loading: true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "LoadPokeSaga":
            return {
                ...state,
                urls: action.payload,
                pokemons: action.payload.results,
            };

        case "LoadingFalse":
            return {
                ...state,
                loading: false
            }

        case "Clear":
            return {
                ...state,
                urls: {},
                pokemons: []
            }
        default:
            return state;
    }
}