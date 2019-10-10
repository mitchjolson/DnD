import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* addMonster(action){
    for(let i=0; i<action.payload.length; i++){
        try{
            const response = yield axios.post('/api/monsters/add', action.payload[i]);
            // yield put({type: 'FETCH_CURRENT_PARTS', payload: {id: action.payload.id, type: action.payload.type}});
            yield console.log('response is', response);
        }
        catch(error){
            console.log('error adding monster', error);
        }
    }
}

function* addMonsterSaga(){
    yield takeEvery('ADD_MONSTERS', addMonster);
}

export default addMonsterSaga;