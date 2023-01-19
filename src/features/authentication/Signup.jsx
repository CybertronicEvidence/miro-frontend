import React, { useEffect } from 'react';

import Form, {FormButton, Input} from '../../components/Form';
import { CreateAccountFormConfig } from '../../../constants/configs';
import Layout from './Layout';

const SignUp = () => {

    useEffect(()=>{
        const normalTitle = document.title;

        // Update title
        document.title = `Crea un account | ${normalTitle}`;

        return ()=>{
            document.title = normalTitle;
        }

    });
  
  return (
    <Layout isLogin={false}>      
        <Form>
          <Input config={CreateAccountFormConfig.username}/>
          <Input config={CreateAccountFormConfig.email}/>
          <Input config={CreateAccountFormConfig.password}/>
          <Input config={CreateAccountFormConfig.confirmPassword}/>
          <FormButton text={"Registrati"}/>
        </Form>
    </Layout>
  )
}

export default SignUp;