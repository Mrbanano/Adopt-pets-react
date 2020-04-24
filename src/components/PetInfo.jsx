import React from 'react'; 

const PetInfo = props => {
    return (
        <div class="PetInfo">
            <div className="PetInfo container">
                <div className="PetInfo-content">

                    <div className="PetInfo-avatar">
                        <img src={props.pet.photo} alt= ""/>
                    </div>
                    <div className="Petinfo-profile">
                        <h2>{props.pet.name}</h2>
                        <span>{props.pet.type === "dog" ? "🐕" : "🐈"}</span>
                        <p>
                            {props.pet.description}
                            <i>{props.pet.gender === "male" ? "♂️" : "♀️"}</i>
                        </p>
                        <div className="PetInfo-type">
                            <button>
                                Adoptar
                            </button>
                        </div>
                        <div className="PetInfo-profile-adopt">
                            <div className="PetInfo-iteam">
                                <h3>Datos de contacto</h3>
                                <span>dueño</span>
                                <h4>Alvaro Castillo</h4>
                                <span>Correo</span>
                                <h4>6666alvaro666@gmail.com</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetInfo;
