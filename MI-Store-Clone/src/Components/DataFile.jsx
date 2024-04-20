import React from 'react'

const DataFile = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const movieApiKey = process.env.REACT_APP_MOVIE_API_KEY;

  return (
      <>
        <div> 
          {apiKey}
        </div>

        <div>
          {movieApiKey}
        </div>
      </>  
  )
}

export default DataFile