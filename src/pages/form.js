import React from 'react'
import Button from '../components/button'
import TextField from '../components/text-field'
import TextArea from '../components/text-area'
import { connect } from 'react-redux'

const connector = connect(state => state)

const Form = props => {
  return (
    <div className="padding-medium">
      <h2>Video Form</h2>
      <form className="measure">
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
