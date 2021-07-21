import "./addPlantToUser.css";

function AddPlantToUser(props) {
  const addPlantToUser = async (name, plant) => {
    try {
      await fetch("http://localhost:5000/user/addplant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name,
          plantname: plant,
        }),
      });
      alert(plant + " has been added to your favourites")
    } catch (error) {}
  };

  return (
    <div>
      <button className="fav-button" onClick={() => addPlantToUser(props.username, props.plant)}>
        Add to favourites
      </button>
    </div>
  );
}

export default AddPlantToUser;

