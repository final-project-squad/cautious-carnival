import { useState } from "react";
import React from "react";

const FetchPlants = () => {
    const allPlants = "all"
    // const petSearch = "pets";
    // const maintSearch = "maintenance"; 
    // const lightSearch = "lighting"; 
    const [page, setPage] = useState();
    const [plantjson, setPlantJson] = useState([]);
    const [formInput, setFormInput] = useState(); 
    const renderAll = async() => {
        try {
            const fetchAll = await fetch("http://localhost:5000/plant")
            const data = await fetchAll.json()
            setPlantJson(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    // const renderPets = async (testing) => {
    //     const response = await fetch("http://localhost:5000/plant"), {
    //     method: "POST", 
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //         petFriendly: testing
    //     })
    //     }
    //     const data = await response.json()
    //     setPlantJson(data);
    // }
    const renderSearch = async (formInput) => {
        const response = await fetch("http://localhost:5000/plant", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: formInput
            })
        })
        const data = await response.json()
        console.log(data);
        setPlantJson(data);
        // console.log(plantjson);
    }

    const getPlants = (e) => {
        e.preventDefault(); 
        renderSearch(formInput)
    }

    const navigatePage = (nextPage) => {
        setPage(nextPage);
    }


    return (
        <div className={"plantheading"}>
            <header>
            <button className={"plantbutton"} onClick={() => navigatePage(renderAll)}>All Plants</button>
        </header>
        <form onSubmit={getPlants}>
            <input onChange={(e) => setFormInput(e.target.value)} />
            <button type="submit" />
        </form>
        <p>{plantjson.map(plantjson => <p>Name: {plantjson.name}, Maintenance: {plantjson.maintenance}</p>)}</p>
        {page === allPlants && renderAll}
        </div>
    )

}

export default FetchPlants