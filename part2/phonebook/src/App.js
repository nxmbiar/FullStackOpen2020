import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {name: newName}
    const found = persons.filter(person => person.name.toLowerCase().includes(newName.toLowerCase()))
    
    if(found.length === 0){
      setPersons(persons.concat(newPerson))
    }
    else{
      alert(`${newName} is already in phonebook`)
    }
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={ handleSubmit }>
        <div>
          name: <input value={ newName } onChange={ handleNewName } />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        { persons.map(person => <li key={ person.name }>{ person.name }</li>) }
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
