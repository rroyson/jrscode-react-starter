import { createStore, combineReducers } from 'redux'

import { merge } from 'ramda'

const store = createStore(
  combineReducers({
    video: (
      state = { name: '', link: '', desc: '', categories: '' },
      action
    ) => {
      switch (action.type) {
        case 'SET_VIDEO_NAME':
          return merge(state, { name: action.payload })
        case 'SET_VIDEO_LINK':
          return merge(state, { link: action.payload })
        case 'SET_VIDEO_DESCRIPTION':
          return merge(state, { desc: action.payload })
        case 'SET_VIDEO_CATEGORIES':
          return merge(state, { categories: action.payload })
        default:
          return state
      }
    },
    videos: function(state = [], action) {
      switch (action.type) {
        case 'SET_VIDEOS':
          return action.payload
        default:
          return state
      }
    },
    categories: function(state = [], action) {
      switch (action.type) {
        case 'SET_CATEGORIES':
          return action.payload
        default:
          return state
      }
    }
  })
)

export default store
