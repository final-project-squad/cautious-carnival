function RemovePlantFromUser(props) {
  const removePlantFromUser = async (name, plant) => {
    try {
      let response = await fetch("http://localhost:5000/user/removeplant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name,
          plantname: plant,
        }),
      });
      alert(plant + " has been removed from your favourites")
      const data = await response.json();
      props.setPlants(data);
    } catch (error) {}
  };

  return (
    <div>
      <button className="remove-button" onClick={() => removePlantFromUser(props.username, props.plant)}>
        Remove from favourites
      </button>
    </div>
  );
}

export default RemovePlantFromUser;
