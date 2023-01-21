import React from 'react';
import Input from './Input';
import FormButton from './Button' ;

const Form = ({children,error,handleSubmit}) => {
  
  return (
    <form onSubmit={handleSubmit}>
        <span 
          data-msg={Boolean(error)} 
          className="center err"
        >
          {error}
        </span>

        {children}
    </form>
  )
}

export default Form;
export {Input, FormButton};