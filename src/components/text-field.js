import React from 'react'

const TextField = props => {
  return (
    <div className="measure">
      <label className="f6 bold dib mb2">
        {props.label}
      </label>
      <input
        className="input-reset db w-100 ba bc-black20 pa2 mb2"
        type="text"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
      <small className="f6 black-60 dib mb2">
        ({props.description})
      </small>
    </div>
  )
}

export default TextField
