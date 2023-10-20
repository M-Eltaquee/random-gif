import React from "react";
import useGif from "../useGif";

const Random = () => {
  const [gif, fetchGif] = useGif("");

  const clickHandler = () => fetchGif();

  return (
    <div className="container">
      <h1>Random GIF</h1>
      <img width={480} height={360} src={gif} alt="Rando GIF" />
      <button onClick={clickHandler}>Change..!</button>
    </div>
  );
};

export default Random;
