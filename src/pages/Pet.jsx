import React from 'react';
import PetInfo from '../components/PetInfo';


const Pet = props => {

    const pet = props.location.state;

    return (
        
        <div className="Pet">
            <div className="Pets-container">
                <div className="Pets-items">
                    <PetInfo pet={pet}></PetInfo>
                </div>
            </div>
        </div>
    )
}

export default Pet;
