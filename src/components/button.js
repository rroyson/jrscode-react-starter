import React from 'react'

const Button = function(props) {
  return (
    <div>
      <button className="fr f6 dim ph4 pv2 dib white bg-purple">
        {props.children}
      </button>
    </div>
  )
}

export default Button
