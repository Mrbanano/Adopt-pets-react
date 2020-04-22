import React from 'react';
import {auth , provider} from '../utils/firebase';

function Login(props) {

    const loginFacebook = ()=>{
        auth().signInWithPopup(provider)
          .then(({ user })=>{
            props.history.push('/panel');
          });
    }
    
    const logoutFacebook = ()=>{
        auth().signOut()
          .then(()=>{
            props.history.push('/');
          });
    }

    return (
        <div className="Login">
            <div className="Login-container">
                <div className="Login-content">
                    <h2>Crear cuenta o iniciar seccion</h2>
                </div>
                <button onClick={loginFacebook}>
                    <i className="fab fa-facebook-square"></i>
                    <span> Inicar seccion con fb </span>
                </button>
                <button onClick={logoutFacebook}>
                    Cerrar ssession
                </button>
            </div>
        </div>
    )
}

export default Login;
