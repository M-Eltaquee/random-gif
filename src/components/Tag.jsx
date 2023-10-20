import React, { useState } from "react";
import useGif from "../useGif";

const Random = () => {
  const [tag, setTag] = useState("trendy");
  const [gif, fetchGif] = useGif("");

  const clickHandler = () => fetchGif(tag);

  return (
    <div className="container">
      <h1>#{tag}</h1>
      <img width={480} height={360} src={gif} alt="" />
      <input
        type="text"
        value={`#${tag}`}
        onChange={(e) => setTag(e.target.value.split("").slice(1).join(""))}
      />
      <button onClick={clickHandler}>Try #{tag}</button>
    </div>
  );
};

export default Random;
