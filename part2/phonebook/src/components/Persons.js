import React from 'react'

const Persons = ({ persons, handleClick }) => {
    return (
    <ul>
        { persons.map(person => <li key={ person.id }>{ person.name } {person.number} <button onClick={ () => handleClick(person.id) }>delete</button> </li>) }
    </ul>
    )}
export default Persons