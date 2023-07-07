import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

const TrafficLight = () => {
  const [trafficColor, setTrafficColor] = useState("");
  const [purple, setPurple] = useState(true);
  useEffect(() => {
    const redTimeout = setTimeout(() => {
      setTrafficColor("red");
    }, 1000);

    const yellowTimeout = setTimeout(() => {
      setTrafficColor("yellow");
    }, 2000);

    const greenTimeout = setTimeout(() => {
      setTrafficColor("green");
    }, 3000);

    const clearAllTimeouts = () => {
      clearTimeout(redTimeout);
      clearTimeout(yellowTimeout);
      clearTimeout(greenTimeout);
    };
    
    const resetTimeout = setTimeout(() => {
      setTrafficColor("");
    }, 4000);

    return () => {
      clearAllTimeouts();
      clearTimeout(resetTimeout);
    };
  }, []);



  return (
    <div className="pole">
      <div className="blackbox">
        <div
          className={"light red " + (trafficColor === "red" ? "glowr" : "")}
          onClick={() => setTrafficColor("red")}
        ></div>
        <div
          className={
            "light yellow " + (trafficColor === "yellow" ? "glowy" : "")
          }
          onClick={() => setTrafficColor("yellow")}
        ></div>

        <div
          className={"light green " + (trafficColor === "green" ? "glowg" : "")}
          onClick={() => setTrafficColor("green")}
        ></div>

        <div
          className={purple ? "d-none light purple" + (trafficColor === "purple" ? "glowp" : "") : "light purple" + '' +(trafficColor === "purple" ? " glowp" : "")}
          onClick={() => setTrafficColor("purple")}
        ></div>
      </div>
      <button className="btn btn-primary" onClick={() => setPurple(!purple)}>Click me</button>
      <div>purple state is: {purple ? 'true' : 'false'}</div>
    </div>
  );
};

export default TrafficLight;
