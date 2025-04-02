import React from 'react'

const Search = ({searchterm, setsearchterm}) => {
  return (
    <div className='search'>

        <div>
            <img src="./search.svg" alt="" />
            <input type="text" placeholder='Search throug thousands of movies' value={searchterm} onChange={(event) => setsearchterm(event.target.value)}/>
        </div>
    </div>
  )
}

export default Search