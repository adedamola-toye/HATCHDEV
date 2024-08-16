import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { MyButton } from './components/button'
import { Card } from './components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //const [data, setData] = useState(false); //data is of type boolean. you can only use the function to change the data in this case use setData to change data
  //const [val, setVal] = useState(null);
  const [userObject, setUserObject] = useState({email : "", name: ""});
  const[loginData, setLoginData] = useState({email: "", password : ""});
  const [visibility, setVisibility] = useState(false);

  /* useEffect(() =>{ //Perform a certain action immediately your page reloads
    alert("Welcome!!")
  }, [visibility, count]) */  //Runs whenever the value of visibility changes or when the value of count chnages.
  //. if its just an empty array it means the alert will run immediately the page finishes loading. 
  //Any data type can be in the dependency array

  //Show content for like 5s
  useEffect(() => {
    setTimeout(() => {
      alert("Welcome!!!");
    } , 3000);
  }, [])

  /* let isLoggedIn = false;
  let isSpecialCase = true;

  let num = 7
  const products = [
    { 
      title: 'Cabbage', 
      id: 1 , 
      price :"$30", 
      discount:"-10%",
      img: "vite.svg"
    },
    { 
      title: 'Carrot', 
      id: 2 , 
      price :"$3", 
      discount:"-10%",
      img: "vite.svg"
    },
    { 
      title: 'Ferrari', 
      id: 3 , 
      price :"$30000", 
      discount:"-20%",
      img: "vite.svg"
    },
    { 
      title: 'Iphone 12', 
      id: 4 , 
      price :"$300", 
      discount:"-15%",
      img: "vite.svg"
    },
  ]; */
  const handleClick = (name) =>{  //could also be function handleClick(){}
    //alert(`${name}, Hello World. Sign up now!!!`)
    setUserObject({...userObject, name: name}) //ensure you pass in an object coz userObject is an object . same as setUserObject({name}) since name and name val are same
    //But we need to also keep the former value of email coz its only name we want to change so we use the spread operator to put the previous copy here  and only change name.
    //If we only did setUserObject({name: name, email = ""}) will make email empty string even when it prob has a previous val so using spread is better
    alert(`${loginData.email} ${loginData.password}`)
  }

  const handleVisibility =() => {
    setVisibility((prev) => !prev)
  }



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

         {/* {(isLoggedIn || isSpecialCase) && <MyButton />}
         {num == 7? <MyButton/> : ""}
         {num == 10 && <MyButton/>} */}

        {/* <div onClick = {() => handleClick("Toyibah")}>
          <MyButton textContent={"Sign Up"} bgColor={"purple"} textColor={"white"}/>
        </div> */}
        {/* <MyButton textContent={"Sign in"} bgColor={"pink"} textColor={"white"}/> */}
        <Card></Card>

          <form>
            <input type="email" onChange ={(e) => setLoginData({...loginData, email: e.target.value})}/>
            <input type="password" onChange={(e) => setLoginData({...loginData, password: e.target.value})}/>
            <div onClick = {() => handleClick()}>
              <MyButton textContent= {"Log in"}/>
            </div>
          </form>

          {/* setVisibility takes in the previous value and gives it a new value like below takes in previous visibility and sets it to the opposite of it */}
          <div onClick = {() =>handleVisibility()}> 
            <MyButton textContent={"Show!"} textColor={"white"} />
          </div>
          {visibility && <h3>Hello I am learning React. Yay! </h3>}
          

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
