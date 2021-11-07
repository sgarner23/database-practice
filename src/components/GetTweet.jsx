import React from "react";
import { useState } from "react";
import axios from "axios";

const GetTweet = () => {
  const [displayData, setDisplayData] = useState(false);
  const [id, setID] = useState("");
  const [data, setData] = useState("");

  async function clickHandler() {
    console.log("I'm working right now");

    const res = await axios
      .get(`/api/tweet/${id}`)
      .catch((error) => console.log(error));
    setData(res.data.tweet);
    setDisplayData(true);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="id"
        value={id}
        onChange={(e) => setID(e.target.value)}
      />
      <button onClick={clickHandler}>Show me the money!</button>
      {displayData && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default GetTweet;
