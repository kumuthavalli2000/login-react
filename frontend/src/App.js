import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css"

function App() {
  const Navigate = useNavigate();
  const [mail, setmail] = useState("");
  const [key, setkey] = useState("");

  const handleEmail = (evt) => {
    setmail(evt.target.value);
  };
  const handlePassword = (evt) => {
    setkey(evt.target.value);
  };
  const handleLogin = (evt) => {
    evt.preventDefault()
    var logindetails = axios.post("https://login-react-yejy.onrender.com/login", {
      email: mail,
      password: key,
    });
    logindetails.then(function (data) {
      if (data.data === true) {
        Navigate("/success");
      } else {
        Navigate("/fail");
      }
    });
  };

  return (
    <form onSubmit={handleLogin} method="post">
     <div className="login-page"> 
      <div className="website-name">STREAMING DISCO</div>

      <div className="disco-ball"></div>

      <div className="shape shape-one"></div>
  <div className="shape shape-two"></div>
  <div className="shape shape-three"></div>

      <div className="login-box"> 
      <h1>WELCOME BACK!</h1> <br />
      <input
        type="email"
        value={mail}
        name="email"
        placeholder="Email"
        onChange={handleEmail}
        required
      />
      <br />
      <input
        type="password"
        value={key}
        name="password"
        placeholder="Password"
        onChange={handlePassword}
        required
      />
      <br />
      <button type="submit" >
        Login
      </button>
      </div>
      </div>
    </form>
  );
}

export default App;
