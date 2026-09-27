import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AccCreation.css";

function AccCreation() {
  const Navigate = useNavigate();
  const [mail, setmail] = useState("");
  const [user, setuser] = useState("");
  const [key, setkey] = useState("");

  const handleEmail = (evt) => {
    setmail(evt.target.value);
  };
  const handleUsername = (evt) => {
    setuser(evt.target.value);
  };
  const handlePassword = (evt) => {
    setkey(evt.target.value);
  };
  const handleRegister = (evt) => {
    evt.preventDefault();
    var registrationdetails = axios.post("http://localhost:5001/register", {
      email: mail,
      password: key,
      username: user,
    });
    registrationdetails.then(function (data) {
      if (data.data == true) {
        Navigate("/");
      } else {
        Navigate("/fail");
      }
    });
  };

  return (
    <div className="account-page">
      <div className="website-name">STREAMING DISCO</div>

      
      <div className="disco-ball"></div> 
      <div className="shape shape-one"></div>
      <div className="shape shape-two"></div>
      <div className="shape shape-three"></div>
      <form className="account-box" onSubmit={handleRegister} method="post">
        <h1>JOIN THE HUB</h1> <br />
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
          type="text"
          value={user}
          name="username"
          placeholder="Username"
          onChange={handleUsername}
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
        <br />
        <button type="submit">Join to watch</button>
      </form>
    </div>
  );
}

export default AccCreation;
