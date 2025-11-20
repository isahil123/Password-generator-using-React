import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
function Password() {
  const [pass, setpass] = useState(" ");
  const [length, setlength] = useState(10);
  const [num, setnum] = useState(false);
  const [char, setchar] = useState(false);
  function generate() {
    let str = "ABCDEFGHIJKLMNQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) {
      str += "0123456789";
    }
    if (char) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    let password = "";
    for (let i = 0; i < length; i++) {
      password += str[Math.floor(Math.random() * str.length)];
    }
    setpass(password);
  }
  useEffect(() => {
    generate();
  }, [length, num, char]);

  return (
    <>
      <div className="main">
        <div className="pass">
          <p>Password:{pass}</p>
        </div>
        <div>
          <input
            type="range"
            min={5}
            max={50}
            value={length}
            onChange={(e) => setlength(e.target.value)}
          ></input>
          <label>Length is: {length}</label>
          <input
            type="checkbox"
            checked={num}
            onChange={() => setnum(!num)}
          ></input>
          <label>Number</label>
          <input
            type="checkbox"
            checked={char}
            onChange={() => setchar(!char)}
          ></input>
          <label>Character</label>
        </div>
      </div>
    </>
  );
}
root.render(<Password />);
