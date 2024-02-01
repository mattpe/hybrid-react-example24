import Home from "./views/Home";
import Profile from "./views/Profile";
import Single from "./views/Single";
import Upload from "./views/Upload";

const App = () => {

  return (
    <>
      <h1>My app</h1>
    {/* TODO: Implement browser router for switching between views */}
      <Home />
      <Profile />
      <Single />
      <Upload />
    </>
  );
};

export default App;
