/* to register users*/
import { useState } from "react";
import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const AddPlant = () => {
  const [name, setname] = useState();
  const [maintenance, setmaintenance] = useState();
  const [lighting, setlighting] = useState();
  const [petFriendly, setpetFriendly] = useState();
  const [watering, setwatering] = useState();
  const [indoor, setindoor] = useState();
  const [notes, setnotes] = useState();

  const fetchLogin = async (
    name,
    maintenance,
    lighting,
    petFriendly,
    watering,
    indoor,
    notes
  ) => {
    const response = await fetch("http://localhost:5000/plant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        maintenance: maintenance,
        lighting: lighting,
        petFriendly: petFriendly,
        watering: watering,
        indoor: indoor,
        notes: notes,
      }),
    });

    try {
      const data = await response.json();
    } catch (error) {
      console.log("an error ocoured in front-end login/register");
    }
  };

  const postPLant = (e) => {
    e.preventDefault();
    fetchLogin(
      name,
      maintenance,
      lighting,
      petFriendly,
      watering,
      indoor,
      notes
    );
  };

  return (
    <div className="form-login">
      <form onSubmit={postPLant}>
        <HighlightOffIcon className="close-icon" />

        <label>name</label>
        <input onChange={(e) => setname(e.target.value)} value={name} />
        <br />
        <label>maintenance</label>
        <input onChange={(e) => setmaintenance(e.target.value)} value={maintenance} />
        <br />
        <label>lighting</label>
        <input onChange={(e) => setlighting(e.target.value)} value={lighting} />
        <br />
        <label>petFriendly</label>
        <input onChange={(e) => setpetFriendly(e.target.value)} value={petFriendly} />
        <br />
        <label>watering</label>
        <input onChange={(e) => setwatering(e.target.value)} value={watering} />
        <br />
        <label>indoor</label>
        <input onChange={(e) => setindoor(e.target.value)} value={indoor} />
        <br />
        <label>notes</label>
        <input onChange={(e) => setnotes(e.target.value)} value={notes} />
        <br />
        <button type="submit" className="btt-login">
          Login
        </button>
      </form>
    </div>
  );
};

export default AddPlant;
