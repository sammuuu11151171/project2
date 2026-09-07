import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import LoteryGame from './LoteryGame'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import './App.css'
import {sum} from "./helper"

function App() {
  const [count, setCount] = useState(0)

  let winCondition = (ticket) => {
    return sum(ticket) === 17;
    // return ticket.every((num) => num === ticket[0]);
    // return ticket[0] === 0;
  }

  return (
    <>
      {/* <LoteryGame n={3} winningSum={17} /> */}
      <LoteryGame n={3} winCondition={winCondition}/>

    </>
  )
}

export default App
