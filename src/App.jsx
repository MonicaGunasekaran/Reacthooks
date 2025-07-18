import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.css'
import React from 'react'

const App = () => {
  const [score, setScore]=useState(0);
  const [wicket, setWicket]=useState(0);
  const [balls, setBalls]=useState(0);
  const [over, setOver]=useState(0);
  
useEffect(()=>{
  if(balls>=6){
    setOver(over+1);
    setBalls(0);
  }
},[balls])
const addScore =(runs)=>{
setScore(score+runs)
setBalls(balls+1)
}
const wicketh=(wicke)=>{
  setWicket(wicket+1);
  setBalls(balls+1);
}
const handleRefresh=()=>{
setBalls(0);
setOver(0);
setScore(0);
setWicket(0);
}
  return (
    <div>
        <h1 class="  text-3xl font-bold text-purple-800 mt-5 ml-5">useState and useEffect</h1>
        <h2 class="text-2xl font-bold text-black ml-5 mt-3">Cricket Score board</h2>
        <div>
          <h3 class="font-bold text-2xl ml-5 mt-2">Score: {score}</h3>
          <h3 class="font-bold text-2xl ml-5 mt-2">Wickets: {wicket}</h3>
          <h3 class="font-bold text-2xl ml-5 mt-2">Balls: {balls}</h3>
          <h3 class="font-bold text-2xl ml-5 mt-2">Overs: {over}</h3>
        </div>
        <div class="flex flex-row gap-2 ml-5 mt-3">
          <button class="bg-amber-500 p-3 rounded-xl" onClick={()=>addScore(1)}>1 Run</button>
           <button class="bg-amber-500 p-3 rounded-xl" onClick={()=>addScore(2)}>2 Runs</button>
           <button class="bg-amber-500 p-3 rounded-xl" onClick={()=>addScore(3)}>3 Runs</button>
           <button class="bg-amber-500 p-3 rounded-xl" onClick={()=>addScore(4)}>4 Runs</button>
           <button class="bg-amber-500 p-3 rounded-xl" onClick={()=>addScore(6)}>6 Runs</button>
           </div>
           <div class="flex flex-row ml-5 mt-3  gap-5">
            <button class="bg-red-800 border-b-black p-3 text-amber-100 rounded-sm" onClick={()=>wicketh(1)}>Wicket</button>
            <button class="bg-green-950 border-b-black p-3  text-amber-100 rounded-sm" onClick={()=>handleRefresh()}>Refresh</button>
           </div>
    </div>
  )
}

export default App
