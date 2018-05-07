import * as types from '../app/actions/types'
import * as actions from '../app/actions/actions'

test('Demo', () => {
  expect(0).toEqual(0)
})

describe('actions', () => {
  it('String check - FAVOURITE_UNI', () => {
    const pubukprn = '10007806'
    const expectedAction = {
      type: types.FAVOURITE_UNI,
      pubukprn
    }
    expect(actions.favouriteUni(pubukprn)).toEqual(expectedAction)
  })
})
