import {useState} from 'react';

function UpdateObject(){
    const [car, setCar] = useState({
        year: 2025,
        name: 'Hundai' 
    })

    const updateYear = (e) => {
        // set attribute with updater function
        setCar((car) => ({...car, year: e.target.value}))
    }

    const updateName = (e) => {
        setCar((car) => ({...car, name: e.target.value}))
    }

    return(
        <div>
            <p>Your favorite car is: {car.name} of {car.year}</p>  
            <input type="number" value={car.year} onChange={updateYear}/> <br />
            <input type="text" value={car.name} onChange={updateName}/>
        </div>
    );
}

export default UpdateObject;