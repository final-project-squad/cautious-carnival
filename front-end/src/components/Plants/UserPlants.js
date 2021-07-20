import React, { useState, useEffect } from "react";
import Plant from "./Plant";

function UserPlants(props) {
  const [plants, setPlants] = useState([]);
 
  useEffect(() => {
    getPlants(props.user);
  }, [props]);

  const getPlants = async (name) => {
    let response = await fetch("http://localhost:5000/user/usersPlants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
      }),
    });
    const data = await response.json()
    


    // let data = await response.json();
    // for (let i = 0; i < data.length; i++) {
    //   const cat = data[i];
    //   cat["name"] = faker.name.firstName();
    //   cat["age"] = faker.datatype.number(12);
    //   cat["price"] = faker.commerce.price(50, 100);
    // }
    // setCats(data);

    setPlants(data)
  };

  

  return (
    <div>
      {plants.map((item,index) => {
        return (
          <Plant
            item={item}
            index={index}
            key={index}
            
        />
        );
      })}
    </div>
  );
}

export default UserPlants;
