import { useState } from "react";
import React from "react";
import "./Plant.css";
import Plant from "./Plant";

const FetchPlants = () => {
  const allPlants = "all";
  // const petSearch = "pets";
  // const maintSearch = "maintenance";
  // const lightSearch = "lighting";
  const [page, setPage] = useState();
  const [plantjson, setPlantJson] = useState([]);
  const [name, setName] = useState();
  const [maintenance, setMaintenance] = useState();
  const [petFriendly, setPetFriendly] = useState();
  const [lighting, setLighting] = useState();
  const renderAll = async () => {
    try {
      const fetchAll = await fetch("http://localhost:5000/plant");
      const data = await fetchAll.json();
      setPlantJson(data);
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
  const nameSearch = async (name) => {
    const response = await fetch("http://localhost:5000/plant/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
      }),
    });
    const data = await response.json();
    console.log(data);
    setPlantJson(data);
    // console.log(plantjson);
  };

  const maintenanceSearch = async (maintenance) => {
    const response = await fetch("http://localhost:5000/plant/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        maintenance: maintenance,
      }),
    });
    const data = await response.json();
    console.log(data);
    setPlantJson(data);
    // console.log(plantjson);
  };
  const petFriendlySearch = async (petFriendly) => {
    const response = await fetch("http://localhost:5000/plant/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        petFriendly: petFriendly,
      }),
    });
    const data = await response.json();
    console.log(data);
    setPlantJson(data);
    // console.log(plantjson);
  };

  const lightingSearch = async (ligthting) => {
    const response = await fetch("http://localhost:5000/plant/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lighting: lighting,
      }),
    });
    const data = await response.json();
    console.log(data);
    setPlantJson(data);
    // console.log(plantjson);
  };

  const getName = (n) => {
    n.preventDefault();
    nameSearch(name);
  };

  const getMaintenance = (m) => {
    m.preventDefault();
    maintenanceSearch(maintenance);
  };

  const getPetFriendly = (p) => {
    p.preventDefault();
    petFriendlySearch(petFriendly);
  };

  const getLighting = (l) => {
    l.preventDefault();
    lightingSearch(lighting);
  };

  const navigatePage = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div className={"plantheading"}>
      <header>
        <button
          className={"plantbutton"}
          onClick={() => navigatePage(renderAll)}
        >
          All Plants
        </button>
      </header>
      <form className="form-searchplant">
      <div className="searchOption">
        <label>Search by Name:</label>
        <input onChange={(n) => setName(n.target.value)} />
        <button onClick={getName}>Submit</button>
        </div>
        <div className="searchOption">
        <label>Search by Maintenance:</label>
        <select
          value={maintenance}
          onChange={(m) => setMaintenance(m.target.value)}
          name="setMaintenance"
        >
          <option disabled selected value="">
            -- Select maintenance --
          </option>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
        </select>
        <button onClick={getMaintenance}>Submit</button>
        </div>
        <div className="searchOption">
        <label>Search for Pet Friendly Plants:</label>
        <select
          value={petFriendly}
          onChange={(e) => setPetFriendly(e.target.value)}
          name="petFriendly"
        >
          <option disabled selected value="">
            -- Select an option --
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button onClick={getPetFriendly}>Submit</button>
        </div>
        <div className="searchOption">
        <label>Search by Light Requirements:</label>
        <select
          value={lighting}
          onChange={(l) => setLighting(l.target.value)}
          name="setlighting"
        >
          <option disabled selected value="">
            -- Select lighting --
          </option>
          <option value="low-light">Happy with shadow</option>
          <option value="partial-sun">Likes a mixture</option>
          <option value="sunlight">Happy with direct sun</option>
        </select>
        <input type="reset" value="Reset"></input>
        <button onClick={getLighting}>Submit</button>
        </div>
      </form>
      <div className="searchComponents">
        {plantjson.map((item,index) => {
        return (
          <Plant
            item={item}
            index={index}
            key={index}
            // user={props}
        />
        )})}
      {page === allPlants && renderAll}
    </div>
    </div>
  );
};

export default FetchPlants;