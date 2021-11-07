import "./App.css";
import Home from "./components/Home";
import DisplayTweet from "./components/DisplayTweet";
import DeleteTweet from "./components/DeleteTweet";
import EditTweet from "./components/EditTweet";
import GetTweet from "./components/GetTweet";

function App() {
  return (
    <>
      <Home />
      <DisplayTweet />
      <DeleteTweet />
      <EditTweet />
      <GetTweet />
    </>
  );
}

export default App;
