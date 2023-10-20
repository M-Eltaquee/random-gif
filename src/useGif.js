import axios from "axios";
import { useEffect, useState } from "react";
const APIkey = process.env.REACT_APP_API_KEY;
const useGif = () => {
  //    const [tag, setTag] = useState()
  const [gif, setGif] = useState(
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXF6bnduZ2Mxa3Exbm16a3cxM3E2MmhjYWM4ZnA4Y216YnMycjVvYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JFTg9PBtHZz9hHRkBN/giphy.gif"
  );

  const fetchGif = async (tag) => {
    setGif(
      () =>
        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXF6bnduZ2Mxa3Exbm16a3cxM3E2MmhjYWM4ZnA4Y216YnMycjVvYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JFTg9PBtHZz9hHRkBN/giphy.gif"
    );
    const response = await axios(
      tag
        ? `https://api.giphy.com/v1/gifs/random?api_key=${APIkey}&tag=${tag}`
        : `https://api.giphy.com/v1/gifs/random?api_key=${APIkey}`
    );
    const data = await response.data;
    data.data.images.downsized_large !== undefined
      ? setGif(() => data.data.images.downsized_large.url)
      : setGif(() => "https://placehold.co/480x360");
  };
  useEffect(() => {
    fetchGif();
    return () => {};
  }, []);

  return [gif, fetchGif];
};

export default useGif;
