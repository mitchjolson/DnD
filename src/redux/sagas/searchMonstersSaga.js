import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* searchMonsters(action) {
    console.log('in searchmonsters')
    try {
        const response = yield axios.get(`/api/monsters/search?monster=%${action.payload}%`);
        yield put({ type: 'SET_MONSTERS', payload: response.data })
    } catch (error) {
        console.log('Error retrieving monsters:', error);
    }
}

function* searchMonstersSaga(){
    yield takeEvery('SEARCH_MONSTERS', searchMonsters);
}

export default searchMonstersSaga;