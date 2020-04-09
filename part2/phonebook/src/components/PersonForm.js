import React from 'react'

const PersonForm = ({ handleSubmit, newName, handleNewName, newNumber, handleNewNumber }) => (
    <form onSubmit={ handleSubmit }>
        <div>
          name: <input value={ newName } onChange={ handleNewName } /><br />
          number: <input value={ newNumber } onChange={ handleNewNumber } />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
)

export default PersonForm