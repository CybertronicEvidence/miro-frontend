import React from 'react';
import Input from './Input';
import FormButton from './Button' ;

const Form = ({children}) => {
  return (
    <div>
        Form
        {children}
    </div>
  )
}

export default Form;
export {Input, FormButton};