import React from "react";
import moment from 'moment';


const PetsItem = (props) => {

    moment.locale('es');
    const date = moment(props.pet.date).format( "YYYYMMDD");
    const _date = moment(date,"YYYYMMDD").fromNow();
    
  return props.pet.length === 0 ?<h1>cargando</h1> : (
    <div className="Pets">
      <div
        className="Pets-cover"
        style={{
          background: `url('${props.pet.photo}')`,
        }}
      >
        <span>{props.pet.type === "dog" ? "🐕" : "🐈"}</span>
        <div className="Pets-type">
          {props.pet.adopt === true ? "Adoptar" : "Cuidar"}
        </div>
      </div>
      <div className="Pets-content">
        <div className="Pets-head">
          <h2>{props.pet.name}</h2>
          <i>{props.pet.gender === "male" ? "♂️" : "♀️"}</i>
        </div>
        <p>{props.pet.description}</p>
        <div className="Pets-date">
            <i className="fas fa-calendar-alt"></i>
            <span>{_date}</span>
        </div>
      </div>
    </div>
  );
};

export default PetsItem;
