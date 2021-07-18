//function get user to send token, fetch and return user
const getUser = async (setUser) => {  
  if (localStorage.getItem("MyToken")) {
    const response = await fetch(`http://localhost:5000/user`, {
      method: "GET",
      headers: { Authorization: `bearer ${localStorage.getItem("MyToken")}` },
    });
    const data = response.json();
    data.then(function (result) {
      setUser(result.name);
    });
  }
};

export default getUser;
