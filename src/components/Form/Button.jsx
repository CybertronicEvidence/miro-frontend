import React from 'react'

const FormButton = ({text, type}) => {
  return (
    <button type={type || 'button'}>
        {text || "Continuare"}
    </button>
  )
}

export default FormButton;