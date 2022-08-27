import React, {useState} from 'react';
//you need to install the scss module before importing it
import './App.scss';

export default function App() {

  //The states
  const[boxOne, setBoxOne] = useState(false);
  const[boxTwo, setBoxTwo] = useState(false);
  const[boxThree, setBoxThree] = useState(false);
  
  //The function that toggle the components
  const toggleBoxOne = () =>{
    setBoxOne(!boxOne);
  }

  const toggleBoxTwo = () => {
    setBoxTwo(!boxTwo);
  }

  const toggleBoxThree = () => {
    setBoxThree(!boxThree);
  }

  return (
    <div className="App">

      <div className="box">
        <button onClick={toggleBoxOne}>Without effect</button>

        {boxOne && 
          <div className="textbox">
            No animation
          </div>
        }
      </div>

      <div className="box">
        <button onClick={toggleBoxTwo}>Opacity effect</button>

        {boxTwo && 
          <div className="textbox Two">
            Opacity effect
          </div>
        }
        
      </div>

      <div className="box">
        <button onClick={toggleBoxThree}>Transform effect</button>

        {boxThree &&
          <div className="textbox Three">
            Transform X animation
          </div>
        }
      </div>

    </div>
  )
}
