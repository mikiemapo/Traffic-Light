import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const TrafficLight = (props) => {
  const [trafficColor, setTrafficColor] = useState('');


  return (
    
   <div className="pole">

    <div className="blackbox">

      <div className={'light red '+ (trafficColor == "red"? 'glowr': "")} onClick={() => setTrafficColor("red")}>
      
      </div>

      <div className={'light yellow '+ (trafficColor == "yellow"? 'glowy': "")} onClick={() => setTrafficColor("yellow")}>
        
      </div>

      <div className={'light green '+(trafficColor == "green"? 'glowg': "")} onClick={() => setTrafficColor("green")}>
       
      </div>

      </div>

    </div>
  );
};

export default TrafficLight;

// function App() {
//   return (

//     <div className="App">

//     </div>
//   );
// }

// export default App;
