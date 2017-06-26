import React from 'react'

const TextArea = function(props) {
  return (
    <div className="measure">
      <lable className="f6 b db mb2">{props.lable}</lable>
      <textarea
        type="text"
        className="input-reset ba b--black20 pa2 mb2 w-100"
        value={props.value}
        onChange={event => props.onChange(event.target.value)}
      />
      <small className="f6 black-60 db mb2">{props.description}</small>
    </div>
  )
}

export default TextArea
