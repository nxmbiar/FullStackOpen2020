import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personService' 

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ showPersons, setShowPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  useEffect(() =>{
    personService
      .getAll()
      .then(data => {
        setPersons(data)
        setShowPersons(data)
      })
  },[])

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let newPerson = {name: newName, number: newNumber}
    const found = persons.filter(person => person.name.toLowerCase().includes(newName.toLowerCase()))
    
    if(found.length === 0){
      personService
        .create(newPerson)
        .then(data => {
          personService
            .getAll()
            .then(data => {
              setPersons(data)
              setShowPersons(data)
            })
        })
    }
    else{
      const res = window.confirm(`${newName} is already in phonebook. Would you like to update?`)
      if(res){
        newPerson = {...found[0],number: newNumber}
        personService
          .update(newPerson)
          .then(data => {
            setPersons(persons.map(person => person.id === data.id ? data : person))
            setShowPersons(persons.map(person => person.id == data.id ? data : person))
          })
      }
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

  const handleDelete = (id) => {
    const name = persons.filter(person => person.id === id)[0].name
    const res = window.confirm(`Are you sure you want to delete ${name}`)
    if(res){
      personService
        .deletePerson(id)
        .then(response => {
          personService
            .getAll()
            .then(data => {
              setPersons(data)
              setShowPersons(data)
            })
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={ newFilter } handleFilter={ handleNewFilter }/>
      <h2>Add new</h2> 
      <PersonForm handleSubmit={ handleSubmit } newName={ newName } handleNewName={ handleNewName } newNumber={ newNumber } handleNewNumber={handleNewNumber } /> 
      <h2>Numbers</h2>
      <Persons persons={ showPersons } handleClick={ handleDelete }/>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App
