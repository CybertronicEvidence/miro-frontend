import React, { useEffect } from 'react';

import Form, {FormButton, Input} from '../../components/Form';
import { LoginFormConfig } from '../../../constants/configs';
import Layout from './Layout';

const Login = () => {
    
  useEffect(()=>{
        const normalTitle = document.title;

        // Update title
        document.title = `Accedi all'account | ${normalTitle}`;

        return ()=>{
            document.title = normalTitle;
        }

    });

  
  return (
    <Layout isLogin={true}>      
        <Form>
          <Input config={LoginFormConfig.email}/>
          <Input config={LoginFormConfig.password}/>
          <FormButton text={"Accedi"}/>
        </Form>
    </Layout>
  )
}

export default Login;