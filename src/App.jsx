import { useState } from 'react'
import Header from './components/Header'
import ScoreBoard from './components/ScoreBoard'
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
  // Owls to be displayed 
  const [owls, setOwls] = useState(allOwls)

  // Track the clicked owls by ID in an array
  const [clickedOwlIds, setClickedOwlIds] = useState([]);

  // Handle the current owl when clicked
  const handleClick = (id) => {

    // DEBUG: log the current owl ID
    console.log(`Owl ${id} clicked!`)

    // Check the current owl has already been clicked
    if (clickedOwlIds.includes(id)) {
      console.log("already clicked", clickedOwlIds)
      console.log("your guess is wrong")
    } else {
      console.log("clicked once", clickedOwlIds)
      console.log("your guess is correct")
    }

    // Add the current owl ID to the clicked history
    setClickedOwlIds(prev => [...prev, id])
    
    // DEBUG: track the clicked history
    console.log(clickedOwlIds)

    // Shuffle owl cards after each click
    setOwls(shuffle(owls))
  }

  return (
    <div>
      <Header />
      <ScoreBoard />
      <OwlGrid>
        {owls.map(owl => (
          <OwlCard
            key={owl.id}
            owl={owl}
            onClick={handleClick}
          />
        ))}
      </OwlGrid>
    </div>
  )
}