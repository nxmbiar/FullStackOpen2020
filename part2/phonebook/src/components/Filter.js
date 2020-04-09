import React from 'react'

const Filter = ({filter, handleFilter }) => {
    return(
        <div>
            <h2>Filter Shown with</h2>
            name: <input value={ filter } onChange={ handleFilter } /><br />
        </div>
    )
  }

export default Filter