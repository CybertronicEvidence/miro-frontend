import React, { useContext, useState, useEffect } from 'react';

import Form, {FormButton, Input} from '../../components/Form';
import { CreateAccountFormConfig } from '../../../constants/configs';
import Layout from './Layout';
import AppContext from '../../../app/context';
import { useNavigate } from 'react-router-dom';
import appUrls from '../../../constants/urls';

const SignUp = () => {


    const {signUp} = useContext(AppContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({});
    const [formError, setFormError] = useState({});
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        const normalTitle = document.title;

        // Update title
        document.title = `Crea un account | ${normalTitle}`;

        return ()=>{
            document.title = normalTitle;
        }

    }, []);

    const handleSubmit = (e=null)=>{
      if(e) e.preventDefault();
      
      if (loading) return
      const {username, email, password } = formData;

      signUp({username, email, password})
      .then((error)=>{
        // If there's response, then it's error
        // error is an object that could contain message
        if(!error) {
          navigate(appUrls.signin);
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
      setFormError(p=>({}));

    }
    const handleInputChange = (e)=>{
      e.preventDefault();

      const name = e.target.name;
      const value = e.target.value;

      setFormData(p=>({...p, [name]:value}));
    }
  
  return (
    <Layout isLogin={false}>      
        <Form 
          error={formError.message} 
          handleSubmit={handleSubmit}
        >
          <Input config={CreateAccountFormConfig.username} error={formError.username} onInputChange={handleInputChange}/>
          <Input config={CreateAccountFormConfig.email} error={formError.email} onInputChange={handleInputChange}/>
          <Input config={CreateAccountFormConfig.password} error={formError.password} onInputChange={handleInputChange}/>
          <Input config={CreateAccountFormConfig.confirmPassword} error={formError.confirmPassword} onInputChange={handleInputChange}/>
          <FormButton text={loading ? "Caricamento...":"Registrati"} type={"submit"} disabled={loading}/>
        </Form>
    </Layout>
  )
}

export default SignUp;