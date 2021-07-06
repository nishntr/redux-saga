import { combineReducers } from "redux";
import cat from "./cat";
import pokemon from "./pokemon";
import pokedetail from "./pokedetail";

const reducers = combineReducers({
    cat,
    pokemon,
    pokedetail
});

export default reducers;