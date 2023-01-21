import React, { useContext, useEffect } from 'react';

import Form, {FormButton, Input} from '../../components/Form';
import { CreateAccountFormConfig } from '../../../constants/configs';
import Layout from './Layout';
import AppContext from '../../../app/context';

const SignUp = () => {


    const context = useContext(AppContext);

    const [formData, setFormData] = useState({});
    const [formError, setFormError] = useState({});


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

      console.log("submited", formData);
    }

    const handleInputChange = (e)=>{
      e.preventDefault();

      const name = e.target.name;
      const value = e.target.value;

      setFormData(p=>({...p, [name]:value}));
    }
  
  return (
    <Layout isLogin={false}>      
        <Form error={formError.message} handleSubmit={handleSubmit}>
          <Input config={CreateAccountFormConfig.username} error={formError.username} onInputChange={handleInputChange}/>
          <Input config={CreateAccountFormConfig.email} error={formError.email} onInputChange={handleInputChange}/>
          <Input config={CreateAccountFormConfig.password} error={formError.password} onInputChange={handleInputChange}/>
          <Input config={CreateAccountFormConfig.confirmPassword} error={formError.confirmPassword} onInputChange={handleInputChange}/>
          <FormButton text={"Registrati"}/>
        </Form>
    </Layout>
  )
}

export default SignUp;