import { takeEvery } from 'redux-saga/effects'

export function moveChatLeftFC(payload: any): void {}

function moveChatLeft(action: any) {
    moveChatLeftFC(action.payload)
}

export default function* accountSaga(): any {
    yield takeEvery('SAVE_CHANGES', moveChatLeft) //? pot sa fac call-ul de cate ori vreau
    //   yield all([sagaGenerators()]); //? pot sa fac un singur call
    //? OK cauta ce si de ce
}
