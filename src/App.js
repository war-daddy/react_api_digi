import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [random, setRandom] = useState([]);
  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((res) => res.json())
      .then((data) => setRandom(data));
  }, []);

  return (
    <div className="App">
      {random.map((item) => (
        <div className="wrapper" style={{ border: "1px solid black" }}>
          <img src={item.img} alt="logo" />
          <b>
            <p>{item.name}</p>
          </b>
          <p>{item.level}</p>
        </div>
      ))}
    </div>
  );
}
