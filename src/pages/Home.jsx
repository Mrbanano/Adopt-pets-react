import React from 'react';
import useGetPets  from '../hooks/index';
import PetItem from '../components/PetsItem';
import {Link} from 'react-router-dom';

const url = "https://us-central1-adoptapets-95d77.cloudfunctions.net/api";


const Home = () =>{

    const pets = useGetPets(url);
    console.log(pets);

    return(
    <div className="Home">
        <div className="Home-container">
            <div className="Home-items">
                {pets.map((pet,index)=>(
                    <Link to={{
                        pathname: `/mascotas/${index}-${pet.name}`,
                        state:{...pet}
                    }}>
                        <PetItem pet={pet} key={`pets-${index}`}></PetItem>
                    </Link>
                ))}
            </div>
        </div>
    </div>
)};

export default Home;