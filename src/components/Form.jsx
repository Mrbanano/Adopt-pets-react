import React from "react";
import {storage,database}from '../utils/firebase';

const Form = () => {

    const onChange = event =>{
        const file = event.target.files[0];
        const storageRef = storage.ref();
        const name = (+new Date())+'-'+file.name;
        const uploadFile = storageRef.child(name).put(file);
        uploadFile
          .then((snapshot)=>{
              snapshot.ref.getDownloadURL()
                .then(donwloadURl => console.log(donwloadURl));
          });
    }


    return(
    <div className="Form">
        <div className="Form-header">
            <h2>Dar en adopcion</h2>
        </div>
        <div className="Form-item">
            <form action="">
                <input type="text" name="name" placeholder="nombre de tu mascota" />
                <input
                    type="text"
                    name="description"
                    placeholder="describe de tu mascota"
                />
                <select name="type">
                    <option value="" disabled selected>
                        Seleccionar
                    </option>
                    <option value="cat">Gato</option>
                    <option value="dog">Perro</option>
                </select>

                <select name="gender">
                    <option value="" disabled selected>
                        Seleccionar
                    </option>
                    <option value="male">Masculino</option>
                    <option value="female">Femenino</option>
                </select>

                <select name="adopt">
                    <option value="" disabled selected>
                        Seleccionar
                    </option>
                    <option value="true">Dar en adopcion </option>
                    <option value="false">Cuidar</option>
                </select>

                <input type="file" onChange={onChange}  name="photo" />

                <button>Enviar</button>
            </form>
        </div>
    </div>
)
};

export default Form;
