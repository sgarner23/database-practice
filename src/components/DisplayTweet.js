import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const DisplayTweet = () => {
  const [displayTweets, setDisplayTweets] = useState(false);
  const [data, setData] = useState([]);

  const clickHandler = async () => {
    setDisplayTweets(true);
    console.log("I'm working??");
    const res = await axios.get("/api/tweets");
    console.log(res.data);
    setData(res.data);
  };

  return (
    <div>
      <button onClick={clickHandler}>Get my tweets!</button>
      {displayTweets && (
        <div>
          {data &&
            data.map((tweetObj, i) => {
              return (
                <div
                  key={i}
                  style={{ border: "1px solid black", margin: "2px" }}
                >
                  <p>id: {tweetObj.id}</p>
                  <p>tweet: {tweetObj.tweet}</p>
                  <button onClick={() => console.log(tweetObj.id)}>
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default DisplayTweet;
