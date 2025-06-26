import { useState } from 'react'
import Header from './components/Header'
import ScoreBoard from './components/ScoreBoard'
import OwlGrid from './components/OwlGrid'
import OwlCard from './components/OwlCard'

// List of owls
const allOwls = [
  { "id": 1, "image": "owl-1.png", "clicked": false },
  { "id": 2, "image": "owl-2.png", "clicked": false },
  { "id": 3, "image": "owl-3.png", "clicked": false },
  { "id": 4, "image": "owl-4.png", "clicked": false },
  { "id": 5, "image": "owl-5.png", "clicked": false },
  { "id": 6, "image": "owl-6.png", "clicked": false }
]

export default function App() {
  // Initialize state for storing the owls' statuses
  const [owls, setOwls] = useState(allOwls)

  // Handle the current owl when clicked
  const handleClick = (id) => {

    // TODO: Debug use
    console.log(`Owl ${id} clicked!`)

    // Update the clicked owl's state
    setOwls(prev =>
      prev.map(owl =>
        owl.id === id ? { ...owl, clicked: true } : owl
      )
    )
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
            onClick={() => handleClick(owl.id)}
          />
        ))}
      </OwlGrid>
    </div>
  )
}
