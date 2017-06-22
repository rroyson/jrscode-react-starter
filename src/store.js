import { createStore, combineReducers } from 'redux'

import { merge } from 'ramda'

const store = createStore(
  combineReducers({
    video: (state = { name: '', link: '', desc: '' }, action) => {
      switch (action.type) {
        case 'SET_VIDEO_NAME':
          return merge(state, { name: action.payload })
        case 'SET_VIDEO_LINK':
          return merge(state, { link: action.payload })
        case 'SET_VIDEO_DESCRIPTION':
          return merge(state, { desc: action.payload })
        default:
          return state
      }
    }
  })
)

export default store
