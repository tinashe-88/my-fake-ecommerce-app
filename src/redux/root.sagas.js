import { all, call } from 'redux-saga/effects'

import { userSagas } from './user/user.sagas'
import { fetchCollectionsStart } from './shop/shop.sagas'

function* rootSaga(){
    yield all([
        call(userSagas),
        call(fetchCollectionsStart)
    ])
}

export default rootSaga