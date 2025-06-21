import React, {useState} from 'react'
import '../src/App.css'
import Header from './Header/Header'
import SectionA from './Section A/SectionA'

function App() {

  const [score,setScore] = useState(0)

  return (
    <>
      <Header score={score}></Header>
      
      <SectionA score={score} setScore={setScore}></SectionA>
    </>
    
  )
}

export default App
