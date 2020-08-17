import directoryReducer, { INITIAL_STATE } from './directory.reducer'

describe('directoryReducer', () => {
  it('Should return the initial state', () => {
    expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE)
  })
})
