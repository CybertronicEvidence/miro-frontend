const LoginFormConfig = {
    email:{
        type: 'email',
        required: true,
        label:'Email',
        placeholder: 'Enter your email'
    },
    password:{
        type: 'password',
        required: true,
        label:'Password',
        placeholder: 'Enter your password'
    }
}
const CreateAccountFormConfig = {
    username:{
        type: 'text',
        required: true,
        label:'Username',
        placeholder: 'Enter a username'
    },
    email:{
        type: 'email',
        required: true,
        label:'Email',
        placeholder: 'Enter an email'
    },
    password:{
        type: 'password',
        required: true,
        label:'Password',
        placeholder: 'Enter your password'
    },
    confirmPassword:{
        type: 'password',
        required: true,
        label:'Confirm password',
        placeholder: 'Confirm your password'
    }
}


export {
    LoginFormConfig,
    CreateAccountFormConfig
}