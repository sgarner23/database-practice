import React from "react";
import { useState } from "react";
import axios from "axios";

const EditTweet = () => {
  const [userID, setUserID] = useState("");
  const [newTweet, setNewTweet] = useState("");

  async function clickHandler() {
    console.log("Stephen you amaze me");
    console.log(userID, newTweet);

    const res = await axios
      .put(`/api/tweets/${userID}`, { tweet: newTweet })
      .catch((error) => console.log(error));

    console.log(res.data);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="id"
        value={userID}
        onChange={(e) => setUserID(e.target.value)}
      />
      <input
        type="text"
        placeholder="New Tweet"
        value={newTweet}
        onChange={(e) => setNewTweet(e.target.value)}
      />
      <button onClick={clickHandler}>Edit</button>
    </div>
  );
};

export default EditTweet;
