import './App.css';
import React, { useState } from 'react';
import MoleContainer from './Components/MoleContainer';
import SplashImage from './Components/SplashImage';


function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleStart = () => {
    setIsLoading(false)
  }

  let [score, setScore] = useState (0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 12; i++) {
      hills.push(
        <MoleContainer
        key={i}
        setScore={setScore}
        score={score} />
      )
    }

    return (
      <div>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      {isLoading ? <SplashImage onStart={handleStart} /> : null}
      <h1>React-a-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;
