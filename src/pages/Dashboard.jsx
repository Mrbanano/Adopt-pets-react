import React from 'react';
import Form from '../components/Form'
import React from 'react';

function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="Dashboard-container">
                <div className="Dashboard-content">
                    <div className="Dashboard-form">
                        <Form></Form>
                    </div>
                    <div className="Dashboard-profile">
                        <div className="Dashboard-profile-info">
                            <img src="" alt="Foto usuario"/>
                            <span>Nombre: </span>
                            <h4>Alvaro Castillo Carreño</h4>
                            <span>Correo:</span>
                            <h4>mail@gmail.com</h4>
                            <button>Cerrar seccion</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
