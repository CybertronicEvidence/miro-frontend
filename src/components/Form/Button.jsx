import React from 'react'

const FormButton = ({text}) => {
  return (
    <button>
        {text || "Continuare"}
    </button>
  )
}

export default FormButton;