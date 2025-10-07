import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className='search'> 
      <div>
        <img src="./search.svg" alt="search area" />
        <input 
        type="text" 
        placeholder='Search through the endless collection'
        value={searchTerm}
        onChange={ (event) => setSearchTerm(event.target.value)}  />
      </div>
    </div>
  )
}

export default Search