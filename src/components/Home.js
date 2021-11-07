import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const handleSubmit = (e) => {
    axios
      .post("api/tweets/", { tweet: text })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Save Tweet</button>
    </div>
  );
};

export default Home;
