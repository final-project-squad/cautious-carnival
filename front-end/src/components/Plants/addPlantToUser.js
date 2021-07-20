
function AddPlantToUser(props) {
 
// console.log(props)

  const addPlantToUser = async (name, plant) => {
    console.log("test Plant")
    console.log(name)
    console.log(plant)
    await fetch("http://localhost:5000/user/addplant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Lance",
        plantname: plant,
      }),
    });
  };

  return (
    <div>
     <button onClick={() => addPlantToUser(props.username, props.plant)}>add plant to user</button>
    </div>
  );
}

export default AddPlantToUser;
