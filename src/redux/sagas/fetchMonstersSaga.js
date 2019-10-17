import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchMonsters(action) {
    try {
        const response = yield axios.get(`/api/monsters`);
        yield put({ type: 'SET_MONSTERS', payload: response.data })
    } catch (error) {
        console.log('Error retrieving monsters:', error);
    }
}

function* fetchMonstersSaga(){
    yield takeEvery('FETCH_MONSTERS', fetchMonsters);
}

export default fetchMonstersSaga;