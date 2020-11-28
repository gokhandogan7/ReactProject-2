import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

const Main = () => {
  const [photo, setPhoto] = useState("https://jsonplaceholder.typicode.com");

  useEffect(async  () => {
    const fetchData = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setPhoto(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <div>
  {
      photo && photo.map(a => <p>{a.name}</p>)
  }
  </div>;
};

export default Main;
