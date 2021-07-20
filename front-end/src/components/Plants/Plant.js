
import AddPlantToUser from "./addPlantToUser";
import RemovePlantFromUser from "./removePlantFromUser";
import "./Plant.css"
// const Plant = ({ item, user }) => {
const Plant = ({ item, user, addRemove}) => {
  console.log(addRemove)
  console.log(user)

  const plantingString = '/images/' +item.name.toLowerCase().replace(/ /g,"_")+ '.jpg';

  const showadd = () => {
    if(user && addRemove==="add") {
    return <AddPlantToUser username={user} plant={item.name}/>
    } 
  }

  const showremove = () => {
    if(user && addRemove==="remove") {
    return <RemovePlantFromUser username={user} plant={item.name}/>
    } 
  }
  

    return (
    <div className="fullComponent">
      <div>
        {/* <img src="./front-end/src/components/Plants/images/abutilon.jpg" alt="plants"></img> */}
        <img src={plantingString} alt="plant"width="100px" height="100px"></img>
        {/* <img src="./images/"{...item.name} alt="plant" width="100px" height="100px"></img> */}
      </div>
      <div className="componentText">
        <p>
          <b>Name:</b> {item.name}{" "}
        </p>
        <p>
          <b>maintenance:</b> {item.maintenance}
        </p>
        <p>
          <b>lighting:</b> {item.lighting}
        </p>
        <p>
          <b>petFriendly:</b> {item.petFriendly}{" "}
        </p>
        <p>
          <b>watering:</b> {item.watering}
        </p>
        <p>
          <b>indoor:</b> {item.indoor}
        </p>
        <p>
          <b>notes:</b> {item.notes}
        </p>
      </div>
      <div>
      {showadd()}
      {showremove()}
      </div>
      {/* <div>
                --this should give more details about the plant
                <button item={item}/>   
                <p> </p>
                --this will allow for plant to be added or removed from user list
                ----if in list reomve if not in list add
                <Button variant="success" size="sm" key={index} onClick={() => addToUser(item)}>Add To User</Button> 
                <Button variant="success" size="sm" key={index} onClick={() => RemoveFromUser(item)}>Remove form User</Button> 
            </div>           */}
    </div>
  );
};

export default Plant;
