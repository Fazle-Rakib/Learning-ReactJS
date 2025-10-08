import {useState} from "react";

function UpdateArray(){
    const [foods, setFoods] = useState(["Apple", "Banana", "Avacado"])
    const [food, setFood] = useState("")

    const foodsList = foods.map((food, index) => (
        <li key={index}>
            {food}
        </li>
    ))

    const updateFood = (e) => {
        setFood(e.target.value)
    }

    const addToFruitsList = () => {
        const newFood = document.getElementById("foodInput").value;
        console.log(newFood);

        setFoods((preFoods) => [...preFoods, newFood])
        document.getElementById("foodInput").value = "";

    }

    return(
        <>
            <ul >
                {foodsList}
            </ul>

            <input id="foodInput" type="text" onChange={updateFood} placeholder="Type a food here"/>
            <button onClick={addToFruitsList}>Add to list</button>
        </>
    )
}

export default UpdateArray;