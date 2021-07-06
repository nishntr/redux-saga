import { put, takeEvery, delay } from 'redux-saga/effects'
import axios from "axios";


// axios.get('https://thatcopy.pw/catapi/rest/')
//     .then(res => {
//         dispatch({
//             type: "GetCat",
//             payload: res.data



async function fetchAsync(url) {
    const response = await axios.get(url);
    if (response) {
        return await response.data;
    }

    throw new Error("Unexpected error!!!");
}

function* fetchData(action) {
    try {
        if (action.prop === "cat") {
            const cat = yield fetchAsync('https://thatcopy.pw/catapi/rest/');

            yield put({ type: "LoadCatSaga", payload: cat });


        } else if (action.prop === "poke") {
            const pokes = yield fetchAsync('https://pokeapi.co/api/v2/pokemon/');
            yield delay(1000)  // only to show the loading animation


            yield put({ type: "LoadPokeSaga", payload: pokes });
            yield put({ type: "LoadingFalse" });

        } else {
            const detail = yield fetchAsync(action.prop);
            yield delay(1000)  // to show the loading animation

            yield put({ type: "LoadDetail", payload: detail });
        }
    } catch (e) {
        console.log(e.message)
        yield put({ type: "ClearDetail" });
    }
}

export function* Saga() {
    // Allows concurrent fetches of users
    yield takeEvery(["Load"], fetchData);

}

export default Saga;