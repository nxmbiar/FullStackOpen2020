import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ showPersons, setShowPersons ] = useState(persons)
  const [ newName, setNewName ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newPerson = {name: newName, number: newNumber}
    const found = persons.filter(person => person.name.toLowerCase().includes(newName.toLowerCase()))
    
    if(found.length === 0){
      setPersons(persons.concat(newPerson))
      setShowPersons(persons.concat(newPerson))
    }
    else{
      alert(`${newName} is already in phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNewFilter = (event) => {
    let filter = event.target.value
    setNewFilter(filter)
    if(filter === ''){
      setShowPersons(persons)
    }
    else{
      setShowPersons(persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={ newFilter } handleFilter={ handleNewFilter }/>
      <h2>Add new</h2> 
      <PersonForm handleSubmit={ handleSubmit } newName={ newName } handleNewName={ handleNewName } newNumber={ newNumber } handleNewNumber={handleNewNumber } /> 
      <h2>Numbers</h2>
      <Persons persons={ showPersons } />
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
