import axios from "axios";
import React, { useEffect, useState } from "react";
const APIkey = process.env.REACT_APP_API_KEY;
const Random = () => {
  const [gif, setGif] = useState();

  const fetchData = async () => {
    const res = await axios(
      `https://api.giphy.com/v1/gifs/random?api_key=${APIkey}`
    );
    const data = res.data;

    setGif(
      data.data.images.downsized_large
        ? data.data.images.downsized_large.url
        : "https://placehold.co/480x360"
    );
  };
  const clickHandler = () => fetchData();
  useEffect(() => {
    fetchData();
    console.log(gif);
  }, []);

  return (
    <div className="container">
      <h1>Rando GIF</h1>
      <img width={480} height={360} src={gif} alt="Rando GIF" />
      <button onClick={clickHandler}>Try new one</button>
    </div>
  );
};

export default Random;
