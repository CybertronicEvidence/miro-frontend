const LoginFormConfig = {
    email:{
        type: 'text',
        required: true,
        label:'E-mail',
        placeholder: 'Inserisci la tua email',
        name:'email',
    },
    password:{
        type: 'password',
        required: true,
        label:'Parola d’ordine',
        placeholder: 'Inserisci la tua password',
        name:'password',
    }
}

const CreateAccountFormConfig = {
    username:{
        type: 'text',
        required: true,
        label:'Nome utente',
        placeholder: 'Inserisci il tuo nome utente',
        name:'username',
    },
    email:{
        type: 'email',
        required: true,
        label:'E-mail',
        placeholder: 'Inserisci un indirizzo email',
        name:'email',
    },
    password:{
        type: 'password',
        required: true,
        label:'Parola d’ordine',
        placeholder: 'Inserisci la tua password',
        name:'password',
    },
    confirmPassword:{
        type: 'password',
        required: true,
        label:'Conferma password',
        placeholder: 'Conferma la tua password',
        name:'confirmPassword',
    }
}


export {
    LoginFormConfig,
    CreateAccountFormConfig
}