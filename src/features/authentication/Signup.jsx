import React from 'react';

import Form, {FormButton, Input} from '../../components/Form';
import { CreateAccountFormConfig } from '../../../constants/configs';
import Layout from './Layout';

const SignUp = () => {
  
  return (
    <Layout isLogin={false}>      
        <Form>
          <Input config={CreateAccountFormConfig.username}/>
          <Input config={CreateAccountFormConfig.email}/>
          <Input config={CreateAccountFormConfig.password}/>
          <Input config={CreateAccountFormConfig.confirmPassword}/>
          <FormButton/>
        </Form>
    </Layout>
  )
}

export default SignUp;