import React from 'react'

const FormButton = ({text, type, ...rest}) => {
  return (
    <button type={type || 'button'} {...rest} >
        {text || "Continuare"}
    </button>
  )
}

export default FormButton;