import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import EditBorn from './components/EditBorn'
import NewBook from './components/NewBook'


const Notify = ({errorMessage}) => {
  
  if ( !errorMessage ) {
    return null
  }
  return (
    <div style={{color: 'red'}}>
      {errorMessage}
    </div>
  )
}

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [page, setPage] = useState('authors')
  

  
  const notify = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 10000)
  }

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
        <button onClick={() => setPage('born')}>change author born year</button>
      </div>

      <Notify errorMessage={errorMessage} />
      <Authors show={page === 'authors'} setError={notify} />
      <Books show={page === 'books'} />
      <NewBook show={page === 'add'} setError={notify} />
      <EditBorn show={page === 'born'} setError={notify} />
    </div>
  )
}

export default App
