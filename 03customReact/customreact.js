

// import { Children } from "react"

function customRender(reactElement,conta){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // conta.appendChild(domElement)
    for (const prop in reactElement.props) {
        if(prop === 'children' ){
            continue;
        }
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    conta.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    props: {
        href:  'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit'
}
const mainCon = document.querySelector('#root')
customRender(reactElement,mainCon)