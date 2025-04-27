import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime"

// jsx = javascript+html

function MyApp() {
  return(
    <div>
      <h1> Custom App!</h1>
    </div>
  )  
}
// const ReactElement = {
//   type: 'a',
//   props: {
//       href:  'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit'
// }

const reactElement = React.createElement(
  'a',
  {
    href:  'https://google.com',target: '_blank'
  },
  'click me to the google'
)  


const anotherElement = (
  <a href="https://google.com" target ='blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)

//object ko bs uske variable name se call krte hai function ke jaise paranthesis laga kr nhi call krte

