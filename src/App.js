import { useState } from "react";
import MoleContainer from "./MoleContainer";

function App() {
  let [score, setScore] = useState(0)
  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer 
        key = {i}
        score = {score}
        setScore = {setScore}
        />
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
      <p>React-a-Mole!</p>
      {score}
      {createMoleHill()}
    </div>
  );
}
// Still need handleClick!
export default App;
