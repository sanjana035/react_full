import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenets/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName: "sanjana",
    age: 25
  }
  return (
    <>
      <div>Hello World</div>
      <Card channel="chai or code" btnTxt = "click me"/>
      <Card channel="chai or react" btnTxt = "visit me"/*someObj = {myObj}*//>
    </>
  )
}

export default App
