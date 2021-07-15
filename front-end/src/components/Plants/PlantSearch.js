import { useState } from "react";
import React from "react";

const FetchPlants = () => {
    const allPlants = "all"
    // const petSearch = "pets";
    // const maintSearch = "maintenance"; 
    // const lightSearch = "lighting"; 
    const [page, setPage] = useState(allPlants);
    const [plantjson, setPlantJson] = useState([]);
    const renderAll = async() => {
        try {
            const fetchAll = await fetch("http://localhost:5000/plant")
            const data = await fetchAll.json()
            setPlantJson(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }


    }

    const navigatePage = (nextPage) => {
        setPage(nextPage);
    }



    return (
        <div className={"plantheading"}>
            <header>
            <button className={"plantbutton"} onClick={() => navigatePage(renderAll)}>All Plants</button>
        </header>
        <p>{plantjson.map(plantjson => <div>Name: {plantjson.name}, Maintenance: {plantjson.maintenance}</div>)}</p>
        {/* <div>
            <button className={"optionButton"} onClick={getPets}
        </div> */}
        {page === allPlants && renderAll}
        </div>
    )

}

export default FetchPlants