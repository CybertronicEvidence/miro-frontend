const LoginFormConfig = {
    email:{
        type: 'email',
        required: true,
        label:'E-mail',
        placeholder: 'Inserisci la tua email'
    },
    password:{
        type: 'password',
        required: true,
        label:'Parola d’ordine',
        placeholder: 'Inserisci la tua password'
    }
}

const CreateAccountFormConfig = {
    username:{
        type: 'text',
        required: true,
        label:'Nome utente',
        placeholder: 'Inserisci il tuo nome utente'
    },
    email:{
        type: 'email',
        required: true,
        label:'E-mail',
        placeholder: 'Inserisci un indirizzo email'
    },
    password:{
        type: 'password',
        required: true,
        label:'Parola d’ordine',
        placeholder: 'Inserisci la tua password'
    },
    confirmPassword:{
        type: 'password',
        required: true,
        label:'Conferma password',
        placeholder: 'Conferma la tua password'
    }
}


export {
    LoginFormConfig,
    CreateAccountFormConfig
}