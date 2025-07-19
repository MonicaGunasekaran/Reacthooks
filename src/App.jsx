import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './style.css';
import React from 'react';


const App = () => {
  const [score, setScore] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [balls, setBalls] = useState(0);
  const [over, setOver] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false); 

  useEffect(() => {
    if (balls >= 6) {
      setOver((prev) => prev + 1);
      setBalls(0);
    }
  }, [balls]);

  const addScore = (runs) => {
    if (!isGameOver) {
      setScore(score + runs);
      setBalls(balls + 1);
    }
  };

  const wicketh = () => {
    if (!isGameOver) {
      setWicket(wicket + 1);
      setBalls(balls + 1);
    }
  };

  const handleRefresh = () => {
    setBalls(0);
    setOver(0);
    setScore(0);
    setWicket(0);
    setIsGameOver(false);
  };

  // 👇 Show final scorecard if wickets reach 10
  useEffect(() => {
    if (wicket >= 10) {
      setIsGameOver(true);
    }
  }, [wicket]);

  return (
    <div>

      <h1 className="text-3xl font-bold text-purple-800 mt-5 ml-5">useState and useEffect</h1>
      <h2 className="text-2xl font-bold text-black ml-5 mt-3">Cricket Score board</h2>

      {!isGameOver ? (
        <>
          <div>
            <h3 className="font-bold text-2xl ml-5 mt-2">Score: {score}</h3>
            <h3 className="font-bold text-2xl ml-5 mt-2">Wickets: {wicket}</h3>
            <h3 className="font-bold text-2xl ml-5 mt-2">Balls: {balls}</h3>
            <h3 className="font-bold text-2xl ml-5 mt-2">Overs: {over}</h3>
          </div>
          <div className="flex flex-row gap-2 ml-5 mt-3">
            <button className="bg-amber-500 p-3 rounded-xl" onClick={() => addScore(1)}>1 Run</button>
            <button className="bg-amber-500 p-3 rounded-xl" onClick={() => addScore(2)}>2 Runs</button>
            <button className="bg-amber-500 p-3 rounded-xl" onClick={() => addScore(3)}>3 Runs</button>
            <button className="bg-amber-500 p-3 rounded-xl" onClick={() => addScore(4)}>4 Runs</button>
            <button className="bg-amber-500 p-3 rounded-xl" onClick={() => addScore(6)}>6 Runs</button>
          </div>
          <div className="flex flex-row ml-5 mt-3 gap-5">
            <button className="bg-red-800 border-b-black p-3 text-amber-100 rounded-sm" onClick={wicketh}>Wicket</button>
            <button className="bg-green-950 border-b-black p-3 text-amber-100 rounded-sm" onClick={handleRefresh}>Refresh</button>
          </div>
        </>
      ) : (
        <div className="ml-5 mt-5">
          <h2 className="text-3xl font-bold text-red-700">Game Over</h2>
          <h3 className="text-xl mt-3">Final Scorecard🏏:</h3>
          <p className="text-lg mt-1">Total Runs: {score}</p>
          <p className="text-lg">Total Wickets: {wicket}</p>
          <p className="text-lg">Total Balls: {balls*over}</p>
          <p className="text-lg">Total Overs: {over}</p>
          <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded" onClick={handleRefresh}>Start New Match</button>
        </div>
      )}
    </div>
  );
};

export default App;
