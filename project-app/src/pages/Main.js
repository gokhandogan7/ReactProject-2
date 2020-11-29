import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

const Main = () => {
  const [photo, setPhoto] = useState("");
  const [charge, setCharge] = useState(1);

  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

const fetchData = async () => axios
      .get(baseUrl + "/users")
      .then((res) => setPhoto(res.data))
      .catch((err) => console.log(err));

  useEffect(() => {fetchData()}, []);
console.log(photo[charge]?.company?.name)
  
  
  
  return (
    <div>
      <input onChange={handleCharge} />
      <p>{photo[charge]?.company?.name}</p>
    </div>
  );
};

export default Main;
