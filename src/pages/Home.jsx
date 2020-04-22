import React from 'react';
import useGetPets  from '../hooks/index';
import PetItem from '../components/PetsItem';

const url = "https://us-central1-adoptapets-95d77.cloudfunctions.net/api";


const Home = () =>{

    const pets = useGetPets(url);
    console.log(pets);

    return(
    <div className="Home">
        <div className="Home-container">
            <div className="Home-items">
                {pets.map((pet,index)=>(
                    <PetItem pet={pet} key={`pets-${index}`}></PetItem>
                ))}
            </div>
        </div>
    </div>
)};

export default Home;