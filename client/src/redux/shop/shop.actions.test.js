import ShopActionTypes from './shop.types'
import {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  fetchCollectionsStartAsync
} from './shop.actions'

describe('fetchCollectionsStart action', () => {
  it('Should create the fetchCollectionsStart action', () => {
    expect(fetchCollectionsStart().type).toEqual(
      ShopActionTypes.FETCH_COLLECTIONS_START
    )
  })  
})

describe('fetchCollectionsSuccess action', () => {
  it('Should create the fetchCollectionsSuccess action', () => {
    const mockCollesctionsMap = {
      jackets: {
        id: 1
      }
    }
    const action = fetchCollectionsSuccess(mockCollesctionsMap)

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS)
    expect(action.payload).toEqual(mockCollesctionsMap)
  })
})

describe('fetchCollectionsFailure', () => {
  it('Should create the fetchCollectionsFailure action', () => {
    const action = fetchCollectionsFailure('errored')

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE)
    expect(action.payload).toEqual('errored')
  })
})

describe('fetchCollectionsStartAsync action', () => {
  it('Should create the fetchCollectionsStartAsync action', () => {
    const mockActionCreator = fetchCollectionsStartAsync()
    const mockDispatch = jest.fn()

    mockActionCreator(mockDispatch)

    expect(mockDispatch).toHaveBeenCalledWith(fetchCollectionsStart())
  });
  
})
