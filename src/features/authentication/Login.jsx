import React from 'react';
import { Link } from 'react-router-dom';
import {siteLogo} from '../../../constants/assets';
import appUrls from '../../../constants/urls';
import Form, {FormButton, Input} from '../../components/Form';

const Login = () => {
  return (
    <>
      <div className='header'>
        <div className='himg'>
          <img
            src={siteLogo}
            alt="Miro"
          />
        </div>

        <div className='htxt'>
          <h4>Login</h4>

          <span>
            <Link to={appUrls.signup}>
              Create account
            </Link> instead?
          </span>
        </div>

      </div>


      <div className='body'>
        <Form>
          <Input/>
          <Input/>
          <FormButton/>
        </Form>
      </div>
      
    </>
  )
}

export default Login;