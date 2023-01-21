import React, { useEffect, useState, useContext} from 'react';

import Form, {FormButton, Input} from '../../components/Form';
import { LoginFormConfig } from '../../../constants/configs';
import AppContext from '../../../app/context';

import Layout from './Layout';

const Login = () => {

  const context = useContext(AppContext);

  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});

  useEffect(()=>{
        const normalTitle = document.title;

        // Update title
        document.title = `Accedi all'account | ${normalTitle}`;

        return ()=>{
            document.title = normalTitle;
        }

  }, []);

  const handleSubmit = (e=null)=>{
    
    if(e) e.preventDefault();

    console.log("submited", formData);
  }

  const handleInputChange = (e)=>{
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;

    setFormData(p=>({...p, [name]:value}));
  }

  
  return (
    <Layout isLogin={true}>      
        <Form error={formError.message} handleSubmit={handleSubmit}>
          <Input config={LoginFormConfig.email} error={formError.email} onInputChange={handleInputChange}/>
          <Input config={LoginFormConfig.password} error={formError.password} onInputChange={handleInputChange}/>
          <FormButton text={"Accedi"} type={"submit"}/>
        </Form>
    </Layout>
  )
}

export default Login;