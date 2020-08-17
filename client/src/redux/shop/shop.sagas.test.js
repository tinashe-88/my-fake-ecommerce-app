import { takeLatest, call, put } from 'redux-saga/effects'

import ShopActionTypes from './shop.types'
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  fetchCollectionsStartAsync
} from './shop.actions'

import { 
  firestore, 
  convertCollectionsSnapshotToMap 
} from '../../firebase/firebase.utils'

import {
  fetchCollectionAsync, 
  fetchCollectionsStart
} from './shop.sagas'

describe('fetchCollectionsStart saga', () => {
  it('Should trigger on FETCH_COLLECTIONS_START', () => {
    const generator = fetchCollectionsStart()

    expect(generator.next().value).toEqual(
      takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
    )
  })
})

describe('fetchCollectionAsync saga', () => {
  const generator = fetchCollectionAsync()

  it('Should call firestore collection', () => {
    const getCollection = jest.spyOn(firestore, 'collection')
    generator.next()

    expect(getCollection).toHaveBeenCalled()
  })

  it('Should call convertCollectionsSnapshotToMap saga', () => {
    const mockSnapshot = {}

    expect(generator.next(mockSnapshot).value).toEqual(
      call(convertCollectionsSnapshotToMap, mockSnapshot)
    )
  })
  
  it('Should call fetchCollectionsSuccess if collectionsMap is successful', () => {
    const mockCollectionsMap = {
      jackets: {
        id: 1
      }
    }

    expect(generator.next(mockCollectionsMap).value).toEqual(
      put(fetchCollectionsSuccess(mockCollectionsMap))
    )
  })

  it('Should fire fetchCollectionsFailure if getCollection fails at any point', () => {
    const newGenerator = fetchCollectionAsync()
    newGenerator.next()

    expect(newGenerator.throw({ message: 'error'}).value).toEqual(
      put(fetchCollectionsFailure('error'))
    )
  })
})
