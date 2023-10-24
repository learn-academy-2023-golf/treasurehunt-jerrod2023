import React, { useState } from "react"
import "./App.css"
import Square from './components/Square'

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])
  const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))
  const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))
  const [gameWon, setGameWon] = useState(false)
  const [gameLose, setGameLose] = useState(false)

  

  const handleGamePlay = (index) => {
    // alert(index)
    if (gameWon) return

    let updatedBoard = [...board]
    if(treasureLocation === index) {
      updatedBoard[index] = <img src="https://mystickermania.com/cdn/stickers/memes/shut-up-and-take-my-money-meme-512x512.png" alt="Treasure"
      style={{ width: '100%', height: '100%' }}
      />
      setBoard(updatedBoard)
      setGameWon(true)

    }else if(bombLocation === index) {
      updatedBoard[index] = <img src="https://static.tvtropes.org/pmwiki/pub/images/bender_anti_role_model.png"
      alt="Bomb"
      style={{ width: '100%', height: '100%' }}
      />
      setBoard(updatedBoard)
      setGameLose(true)

    } else {updatedBoard[index] = <img src="https://media.tenor.com/7t63GFnoIPUAAAAd/huh-cat-huh-m4rtin.gif"
    alt="Neutral"
    style={{ width: '100%', height: '100%' }}
    />
    setBoard(updatedBoard)
    }

  }
  const handleReset = () => {
    setBoard(Array(9).fill("?"))
    setTreasureLocation(Math.floor(Math.random() * board.length))
    setBombLocation(Math.floor(Math.random() * board.length))
    setGameWon(false)
    setGameLose(false)
  }

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
      {board.map((value, index) => {
        return(
        <Square 
        value={value} 
        key={index}
        index={index}
        handleGamePlay={handleGamePlay}
        />
        )
      })}
      </div>
      {gameWon && (
      <div className="win-message"><button onClick={handleReset} className="reset-button">Play Again</button>
      </div>
      )}
      {gameLose && 
      (<div className="lose-message">LOOOOSSSSEEERRRRR<button onClick={handleReset} className="reset-button">Play Again</button>
      </div>
      )}
    </>
  )
}

export default App
