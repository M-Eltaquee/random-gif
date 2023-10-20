import axios from "axios";
import React, { useEffect, useState } from "react";
const APIkey = process.env.REACT_APP_API_KEY;
const Tag = () => {
  const [tag, setTag] = useState("dog");
  const [gif, setGif] = useState("");
  const searchGif = async (item) => {
    const res = await axios(
      `https://api.giphy.com/v1/gifs/random?api_key=${APIkey}&tag=${item}`
    );
    const data = await res.data;
    data.data.images.downsized_large
      ? setGif(() => data.data.images.downsized_large.url)
      : searchGif(() => "https://placehold.co/480x360");
  };
  const clickHandler = () => searchGif(tag);
  useEffect(() => {
    searchGif(tag);
  }, [tag]);

  return (
    <div className="container">
      <h1>GIF for {tag} Tag</h1>
      <img width={480} height={360} src={gif} alt="" />
      <input type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={clickHandler}>Try new {tag} gif</button>
    </div>
  );
};

export default Tag;
