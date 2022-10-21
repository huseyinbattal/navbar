import { useState } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import CollapsibleExample from "./NavBar";

function App() {
  const [email, setEmail] = useState("");
  const [show,setShow]=useState(false)
  return (
    <div>
      {show?
      <CollapsibleExample email={email} />:<LoginPage email={email} setEmail={setEmail} show={show} setShow={setShow} />}
      
    </div>
  );
}

export default App;
