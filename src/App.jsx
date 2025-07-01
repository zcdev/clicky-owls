import { useState } from 'react'
import Header from './components/Header'
import Scoreboard from './components/Scoreboard'
import OwlGrid from './components/OwlGrid'
import OwlCard from './components/OwlCard'
import { shuffle } from './utils/shuffle'

// List of owls
const allOwls = [
  { "id": 1, "image": "owl-1.png" },
  { "id": 2, "image": "owl-2.png" },
  { "id": 3, "image": "owl-3.png" },
  { "id": 4, "image": "owl-4.png" },
  { "id": 5, "image": "owl-5.png" },
  { "id": 6, "image": "owl-6.png" }
]

export default function App() {
  // List of currently shuffled owls
  const [owls, setOwls] = useState(allOwls)

  // Array of owl IDs already clicked
  const [clickedOwlIds, setClickedOwlIds] = useState([])

  // Current game score
  const [score, setScore] = useState(0)

  // All-time highest score
  const [highScore, setHighScore] = useState(0)

  // UI messages
  const [message, setMessage] = useState("")

  // Winning state
  const [isGameWon, setIsGameWon] = useState(false)

  // Handle the current owl when clicked
  const handleClick = (id) => {

    // Check winning state and freeze game if won
    if (isGameWon) return;

    // DEBUG: log the current owl ID
    console.log(`Owl ${id} clicked!`)

    // Check if this owl was already clicked
    if (clickedOwlIds.includes(id)) {
      setMessage("Your guess is wrong.")

      // Incorrect guess: reset score and clicked owl history
      setScore(0)
      setClickedOwlIds([])

    } else {
      setMessage("Your guess is correct.")

      // Correct guess: track this owl ID to prevent future duplicates
      setClickedOwlIds(prev => [...prev, id])

      setScore(prev => {
        // Increment score by 1
        const newScore = prev + 1

        // Update high score if new score is higher
        if (newScore > highScore) setHighScore(newScore)

        // Win: if all owls are clicked
        if (newScore === allOwls.length) {
          setMessage("You win!")
          setIsGameWon(true)
        }
        return newScore
      })
    }

    // Shuffle owl cards after each click
    setOwls(shuffle(owls))
  }

  return (
    <>
      <Header message={message} />
      <main aria-label="Owl memory game">
        <Scoreboard
          score={score}
          highScore={highScore}
        />
        <OwlGrid isGameWon={isGameWon}>
          {owls.map(owl => (
            <OwlCard
              key={owl.id}
              owl={owl}
              onClick={handleClick}
            />
          ))}
        </OwlGrid>
      </main>
    </>
  )
}