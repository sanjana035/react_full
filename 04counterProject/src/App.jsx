import { useState } from 'react'///this is use for hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  ////setCounter is basically a method/function jo counter variable ko controll karega
////ye hook state ko change krne ke liye {change ko propAGATE KIYA JATA HAI dom me}
  // let counter = 2;
  const addvalue = () => {
    
    counter = counter + 1;
    setCounter(counter);
    console.log("value added", counter);
    
  }
  
  const removevalue = () =>{
    setCounter(counter-1);
    // console.log("value added", counter);
  }

  return (
    <>
      <h1>chai our code</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
