import React, { useState } from "react";
import { storage, database } from "../utils/firebase";

const Form = () => {
  const [petPhoto, setPetPhoto] = useState("");
  const [sendForm, setForm] = useState(false);

  const handleSubmint = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const newDate = new Date().toISOString();

    const data = {
      adopt: form.get("adopt"),
      date: newDate,
      description: form.get("description"),
      gender: form.get("gender"),
      name: form.get("name"),
      photo: petPhoto,
      profilePic: "",
      type: form.get("type"),
      userContact: "",
      userName: "",
    };

    database
      .ref("pets")
      .push(data)
      .then((response) => setForm(true))
      .catch(() => setForm(false));
  };

  const onChange = (event) => {
    const file = event.target.files[0];
    const storageRef = storage.ref();
    const name = +new Date() + "-" + file.name;
    const uploadFile = storageRef.child(name).put(file);
    uploadFile.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((donwloadURl) => setPetPhoto(donwloadURl));
    });
  };

  return (
    <div className="Form">
      <div className="Form-header">
        <h2>Dar en adopcion</h2>
      </div>
      {sendForm === true ? (
        <div className="Form-send">
          <span>Guardado con exito</span>
        </div>
      ) : (
        <div className="Form-item">
          <form onSubmit={handleSubmint}>
            <input type="text" name="name" placeholder="nombre de tu mascota" />
            <input
              type="text"
              name="description"
              placeholder="describe de tu mascota"
            />
            <select name="type">
              <option value="" disabled defaultValue>
                Seleccionar
              </option>
              <option value="cat">Gato</option>
              <option value="dog">Perro</option>
            </select>

            <select name="gender">
              <option value="" disabled defaultValue>
                Seleccionar
              </option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
            </select>

            <select name="adopt">
              <option value="" disabled defaultValue>
                Seleccionar
              </option>
              <option value="true">Dar en adopcion </option>
              <option value="false">Cuidar</option>
            </select>

            <input type="file" onChange={onChange} name="photo" />

            <button>Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
