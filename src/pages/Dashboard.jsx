import React from 'react';
import {connect }from 'react-redux';
import Form from '../components/Form'
import {setUSer} from '../actions/';


const Dashboard = props  => {
    return (
        <div className="Dashboard">
            <div className="Dashboard-container">
                <div className="Dashboard-content">
                    <div className="Dashboard-form">
                        <Form></Form>
                    </div>
                    <div className="Dashboard-profile">
                        <div className="Dashboard-profile-info">
                            <img src={props.user.photoURl} alt="Foto usuario"/>
                            <span>Nombre: </span>
                            <h4>{props.user.displayName}</h4>
                            <span>Correo:</span>
                            <h4>{props.user.email}</h4>
                            <button>Cerrar seccion</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = {
    setUser,
}

const mapStateToProps = state => {
    return {
        user:state.user
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);