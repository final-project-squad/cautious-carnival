

function AddPlantToUser(props) {

  const addPlantToUser = async (name, plant) => {

    await fetch("http://localhost:5000/user/addplant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name,
        plantname: plant,
      }),
    });
  };

  return (
    <div>

      <button onClick={() => addPlantToUser(props.username, props.plant)}>
        Add to favourites
      </button>
    </div>
  );
}

export default AddPlantToUser;
