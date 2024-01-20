import { useState } from 'react'
import './App.css'

function App() {
  const [inputValues, setInputValues] = useState(Array(16).fill(''))
  const [winner, setWinner] = useState(null)
  //Winning Combinations

  const winningCombinations = [
    [0, 1, 2], [1, 2, 3],
    [4, 5, 6], [5, 6, 7],
    [8, 9, 10], [9, 10, 11],
    [12, 13, 14], [13, 14, 15],
    [0, 4, 8], [4, 8, 12],
    [1, 5, 9], [5, 9, 13],
    [2, 6, 10], [6, 10, 14],
    [3, 7, 11], [7, 11, 15],
    [0, 5, 10], [1, 6, 11], [2, 7, 12], [3, 6, 9],
    [3, 6, 9], [4, 9, 14], [5, 10, 15], [0, 5, 10],
    [12, 9, 6], [13, 10, 7], [8, 5, 2]
  ]

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues]
    newInputValues[index] = value
    setInputValues(newInputValues)

    // Logic for winning combinations

    for (const combination of winningCombinations) {
      const [a, b, c] = combination
      if (
        newInputValues[a] === 'X' && newInputValues[b] === 'X' && newInputValues[c] === 'X'
      ) {
        setWinner('X')
        return
      } else if (
        newInputValues[a] === 'O' && newInputValues[b] === 'O' && newInputValues[c] === 'O'
      ) {
        setWinner('O')
        return
      }
    }
  };

  const resetGame = () => {
    setInputValues(Array(16).fill(''));
    setWinner(null);
  }



  return (
    <div className='app'>
      <div className="grid">
        {inputValues.map((value, index) => (
          <input
            key={index}
            name='field'
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value.toUpperCase())}
            maxLength={1}
          />
        ))}
        <button onClick={resetGame}>Restart</button>
        {winner && (
        <div className="win-card">
          <div className="win-content">
            <p>{`${winner}`}<br />wins!</p>
          </div>
          <button id='play-again-btn'  onClick={resetGame}>Play Again</button>
        </div>
      )}
      </div>
    </div>
  );
}

export default App
