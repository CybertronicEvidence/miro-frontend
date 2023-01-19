import React from 'react';
import Input from './Input';
import FormButton from './Button' ;

const Form = ({children}) => {
  return (
    <form>
        {children}
    </form>
  )
}

export default Form;
export {Input, FormButton};