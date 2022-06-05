import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"

import Footer from './Footer'

import CreateNew from './CreateNew'
import About from './About'
import Anecdotes from './Anecdotes'
import { useState } from "react"

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])
  const padding = {
    padding: 5
  }

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }


  return (
    <div>
    <Router>
      <div>
        <Link style={padding} to="/"> anecdotes </Link>
        <Link style={padding} to="/create"> create </Link>
        <Link style={padding} to="/about"> about </Link>
      </div>
      
     
       <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateNew addNew={addNew} />} />
        <Route path="/" element={<Anecdotes anecdotes={anecdotes}/>} />
      </Routes>
      </Router>
   
  

      <div>
        <i><Footer/></i>
      </div>
      </div>

  )
}

export default App