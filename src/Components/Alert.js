import React from 'react'

function Alert(props) {
  return (
    <div>
        <div className="alert alert-danger" role="alert"><strong>{props.alert}</strong>
        This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
    </div>
    </div>
  )
}

export default Alert
