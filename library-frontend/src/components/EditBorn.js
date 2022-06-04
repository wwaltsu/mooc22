import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { ALL_AUTHORS, EDIT_AUTHOR } from '../queries'

const EditBorn = ({setError, show}) => {
  const [name, setName] = useState('')
  const [setBornTo, setBorn] = useState('')
  

  const [editAuthor, result] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [ { query: ALL_AUTHORS, variables: setBornTo, name } ],
    onError: (error) => {
      setError(error.graphQLErrors[0].message)
    },
  })
  

  useEffect(() => {
    if (result.data && result.data.editAuthor === null) {
      setError('person not found')
    }
  }, [result.data])

  if (result.loading)  {
    return <div>loading...</div>
  }

  if (!show) {
    return null
  }

  const submit = async (event) => {
    event.preventDefault()

    editAuthor({ variables: { name, setBornTo } })

    setName('')
    setBorn('')
  
  }


 

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          name
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          born
          <input
            type="number"
            value={setBornTo}
            onChange={({ target }) => setBorn(parseInt(target.value))}
          />
        </div> 
        <button type="submit">update author</button>
      </form>
    </div>
  )
}

export default EditBorn
