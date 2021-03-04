import {takeEvery,put} from 'redux-saga/effects'



function *callIncrease() {
    delay(1000)
    yield put ({type:'count/increaseCount'})
}

function *callDecrease() {
    delay(1000)
    yield put ({type:'count/decreaseCount'})
}

function *addCount() {
    yield takeEvery('actionDecrease',callIncrease)
}


function *minusCount() {
    yield takeEvery('actionIncrease',callDecrease)
}