import React from 'react';

import Form, {FormButton, Input} from '../../components/Form';
import { LoginFormConfig } from '../../../constants/configs';
import Layout from './Layout';

const Login = () => {
  
  return (
    <Layout isLogin={true}>      
        <Form>
          <Input config={LoginFormConfig.email}/>
          <Input config={LoginFormConfig.password}/>
          <FormButton/>
        </Form>
    </Layout>
  )
}

export default Login;