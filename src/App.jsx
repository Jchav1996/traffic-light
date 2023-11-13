import { useEffect, useState } from "react"
import { Light } from "./Light"

export default function App(){
  const [activeLight, setActiveLight] = useState("red");
  const [isActive, setIsActive] = useState(false)

useEffect(() => {
  const interval = setInterval(() => {
    if (!isActive) {
      return
    }
    switch(activeLight) {
      case "red":
        setActiveLight("yellow")
        break
        case "yellow":
          setActiveLight("green")
          break
          case "green":
            setActiveLight("red")
    }
  }, 3000);

  return () => clearInterval(interval);
})



  return (
    <>
    <div className="stick"/>
    <div className="trafficLight">
      <Light color= "red" opacity={activeLight === "red"? 1:0.4}/>
      <Light color= "yellow" opacity={activeLight === "yellow"? 1:0.4}/>
      <Light color= "green" opacity={activeLight === "green"? 1:0.4}/>
    </div>
<button onClick={()=> setIsActive(!isActive)}>
  <h1>{activeLight}</h1>
ON / OFF</button>
    </>
  )
}
