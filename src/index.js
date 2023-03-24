import React from "react"
import * as ReactDOMClient from "react-dom/client";



// ReactDOM.render(<h1>Hello</h1>, document.getElementById("app"))


// ReactDOM.render(<div>
//     <h1>Hello</h1>
//     <h2>Hello</h2>
// </div>, document.getElementById("app"))



// ReactDOM.render(React.createElement("input", {
//     placeholder: "Help Text",
//     // value: "da"
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse"),
// }), document.getElementById("app"))



// const inputClick = () => console.log("Clicked");
// const inputOver = () => console.log("Over");

// const helpText = "Help Text !!!!"

// const elements = <input placeholder={helpText} 
//     onClick={inputClick} onMouseOver={inputOver}></input>

// const app = document.getElementById("app") 

// ReactDOM.render(elements, app)







const inputClick = () => console.log("Clicked");
const inputOver = () => console.log("Over");

const helpText = "Help Text !!!!"
const helloWorld = "Hello My World"


function Header(params) {
  return(
    <header>Head</header>
  )
}

function App() {
  return (<div className="name">
    <Header/>
    <h1>ksdvhis</h1>
    <p>{helpText}</p>
    <p>bfgdskl;fn</p>
    <input placeholder={helpText} onClick={inputClick} onMouseOver={inputOver}></input>
    <p>{helloWorld}</p>
    <p>{helpText === "Help Text !!!!" ? "Yes" : "No"}</p>
</div>)
}

const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(<App/>)



