import axios from "axios";
import React from "react";
import { useState } from "react";

const DeleteTweet = () => {
  const [deleteInput, setDeleteInput] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    console.log("Hello Stephen, you are very smart");
    console.log(deleteInput);

    const res = await axios
      .delete(`/api/tweets/${deleteInput}`)
      .catch((error) => console.log(error));
    console.log(res.data);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={deleteInput}
          onChange={(e) => setDeleteInput(e.target.value)}
        />
        <button>Delete this!</button>
      </form>
    </div>
  );
};

export default DeleteTweet;
