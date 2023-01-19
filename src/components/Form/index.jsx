import React from 'react';
import Input from './Input';
import FormButton from './Button' ;

const Form = ({children}) => {
  return (
    <form>
        <span data-msg={false} className="center err">Error message</span>
        {children}
    </form>
  )
}

export default Form;
export {Input, FormButton};