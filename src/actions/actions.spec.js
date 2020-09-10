import * as actions from './index'

describe('actions', () => {
  it('should create an action to load gifs pending', () => {
    const expectedAction = {
      type: actions.LOAD_GIFS_PENDING
    }
    expect(actions.loadGifsPending()).toEqual(expectedAction)
  })
  it('should create an action to load gifs success', () => {
    const gifs=[];
    const expectedAction2 = {
      type: actions.LOAD_GIFS_SUCCESS,
      payload: []
    }
    expect(actions.loadGifsSuccess(gifs)).toEqual(expectedAction2)
  })
})