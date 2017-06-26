import React from 'react'
import Button from '../components/button'
import TextField from '../components/text-field'
import TextArea from '../components/text-area'
import { connect } from 'react-redux'
import { split, map, concat, uniq } from 'ramda'

const connector = connect(state => state)

// function mapActionsToProps(dispatch) {
//   return {
//     save(video, history) => {
//       return dispatch => {
//         dispatch({ type: 'SUBMITTING'})
//         return save(video)
//           .then(res => {
//             history.push('/')
//           })
//           .then(res => dispatch({type: 'FINISHED'}))
//       }
//     },
//     setName: text => {
//       dispatch({type: 'SET_VIDEO_NAME', payload: text})
//     },
//     setDescription: text => {
//       dispatch({type: 'SET_VIDEO_DESCRIPTION', payload: text})
//     }
//   }
//   }

const Form = props => {
  return (
    <div className="padding-medium">
      <h2>Video Form</h2>
      <form
        className="measure"
        onSubmit={function(event) {
          event.preventDefault()
          props.video.categories = map(
            s => s.trim(),
            split(',', props.video.categories)
          )

          const masterCategories = uniq(
            concat(props.categories, props.video.categories)
          )

          const updateCategories = categories => {
            fetch('http://localhost:4000/categories', {
              method: 'PUT',
              headers: new Headers({
                'Content-Type': 'application/json'
              }),
              body: JSON.stringify({ values: categories })
            })
              .then(res => {
                res.json()
              })
              .then(
                props.dispatch({
                  type: 'SET_CATEGORIES',
                  payload: masterCategories
                })
              )
          }

          updateCategories(masterCategories)

          console.log('props.categories', props.categories)
          console.log('props.video.categories', props.video.categories)
          console.log('result', masterCategories)

          fetch('http://localhost:4000/videos', {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify(props.video)
          })
            .then(function(res) {
              return res.json()
            })
            .then(function(doc) {
              props.dispatch({ type: 'RESET_VIDEO_STATE' })
              return props.history.push('/')
            })
        }}
      >
        <TextField
          label="Name"
          description="Enter short name of video"
          value={props.video.name}
          onChange={name =>
            props.dispatch({ type: 'SET_VIDEO_NAME', payload: name })}
        />
        <TextField
          label="Link"
          description="Enter Link for Video"
          value={props.video.link}
          onChange={link =>
            props.dispatch({ type: 'SET_VIDEO_LINK', payload: link })}
        />
        <TextField
          label="Categories"
          description="Enter Category for Video"
          value={props.video.categories}
          onChange={categories =>
            props.dispatch({
              type: 'SET_VIDEO_CATEGORIES',
              payload: categories
            })}
        />
        <TextArea
          label="Description"
          description="Describe your video"
          value={props.video.desc}
          onChange={desc =>
            props.dispatch({
              type: 'SET_VIDEO_DESCRIPTION',
              payload: desc
            })}
        />

        <div>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default connector(Form)
