import React, { useContext,useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../app/context'
import appUrls from '../../constants/urls';
import { FormButton } from '../components/Form';

const Modal = ({children, backgroundClick})=>{

    const onBackgroundClick = ()=>{
        if (backgroundClick) return backgroundClick();

        return null;
    }

    return (
        <div className='appModal' onClick={onBackgroundClick}>

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


export const LogoutModal = ({loggingOut,dismiss})=>{

    const {signOut} = useContext(AppContext);
    const navigate = useNavigate();


    const signOutUser = ()=>{
        signOut();
        // navigate(appUrls.home);
        dismiss();
    }

    if (!loggingOut) return null;

    return (
        <Modal backgroundClick={()=>dismiss()}>
            <div className="authChecker">
                <h5>Do you want to logout?</h5>

                <div className="actions">
                    <FormButton 
                        text={"Cancel"}
                        onClick={()=>dismiss()}
                        className="sm-button"
                    />
                    <FormButton 
                        text={"Log out"}
                        onClick={()=>signOutUser()}
                        className="sm-button"
                    />
                </div>
            </div>
        </Modal>
    )
}

export default Modal;