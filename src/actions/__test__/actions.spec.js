import * as actions from '../index'

describe('actions', () => {
  it('should create an action to load gifs pending', () => {
    expect(actions.loadGifsPending()).toEqual({
        type: actions.LOAD_GIFS_PENDING
      })
  })
  it('should create an action to load gifs success', () => {
    const gifs=[];
    expect(actions.loadGifsSuccess(gifs)).toEqual({
        type: actions.LOAD_GIFS_SUCCESS,
        payload: gifs
      })
  })
  it('should create an action to load gifs fail', () => {
    const error=[];
    expect(actions.loadGifsFailed(error)).toEqual({
        type: actions.LOAD_GIFS_FAILED,
        payload: error
      })
  })
  it('should create an action to set isTrending boolean', () => {
    expect(actions.setIsTrending(true)).toEqual({
        type: actions.SET_IS_TRENDING,
        payload: true
      })
  })

  it('should create an action to set the search query', () => {
    const query = "ABA"
    expect(actions.setQuery(query)).toEqual({
        type: actions.SET_QUERY,
        payload: query
      })
  })
  
  it('should create an action to set search type gifs or stickers', () => {
    const type = "gifs"
    expect(actions.setType(type)).toEqual({
        type: actions.SET_TYPE,
        payload: type
      })
  })

  it('should create an action to set search results sort by date', () => {
    const sortByDate = true
    expect(actions.sortByDate(sortByDate)).toEqual({
        type: actions.SORT_BY_DATE,
        payload: sortByDate
      })
  })

})