import React, { useEffect, useState, useContext} from 'react';

import Form, {FormButton, Input} from '../../components/Form';
import { LoginFormConfig } from '../../../constants/configs';
import AppContext from '../../../app/context';

import Layout from './Layout';
import { useNavigate } from 'react-router-dom';
import appUrls from '../../../constants/urls';

const Login = () => {

  const {signIn, user} = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);

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

    if (loading) return

    const {email, password } = formData;

    signIn({username:email, password})
    .then((error)=>{
      // If there's response, then it's error
      // error is an object that could contain message
      if(!error) {
        // console.log("authenticated", user);
        navigate(appUrls.home);
        return;
      }

      // update Form error
      setFormError(p=>error);
      setLoading(false);
      
    })
    .catch((error)=>{
      // console.error(error);
      setFormError(p=>error);
      setLoading(false);
    });

    setLoading(true);

  }

  const handleInputChange = (e)=>{
    e.preventDefault();
    if (loading) return

    const name = e.target.name;
    const value = e.target.value;

    setFormData(p=>({...p, [name]:value}));
  }

  
  return (
    <Layout isLogin={true}>      
        <Form error={formError.message} handleSubmit={handleSubmit}>
          <Input config={LoginFormConfig.email} error={formError.email} onInputChange={handleInputChange}/>
          <Input config={LoginFormConfig.password} error={formError.password} onInputChange={handleInputChange}/>
          <FormButton text={loading ? "Caricamento...":"Accedi"} type={"submit"} disabled={loading}/>
        </Form>
    </Layout>
  )
}

export default Login;