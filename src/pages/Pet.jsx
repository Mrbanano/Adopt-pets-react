import React from 'react';
import PetInfo from 'react';
function Pet() {
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
