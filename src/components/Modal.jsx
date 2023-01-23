import React, { useContext,useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../app/context'
import appUrls from '../../constants/urls';

const Modal = ({children})=>{
    return (
        <div className='appModal'>

            <div className="content">
                {children}
            </div>
        </div>
    )
}

export const CheckAuthModal = ({onAuth})=>{

    const {user, signOut} = useContext(AppContext);
    const navigate = useNavigate();


    const checkAuth = ()=>{
        if (Boolean(user) && Boolean(user?.token)) {
            return onAuth();
        }

        signOut();
        navigate(appUrls.auth);
    }

    useEffect(()=>{
        checkAuth();
    },[]);

    return (
        <Modal>
            <div className="authChecker">
                <span>Verifica dell'autenticazione</span>
            </div>
        </Modal>
    )
}

export default Modal;