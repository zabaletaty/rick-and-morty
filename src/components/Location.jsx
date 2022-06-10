import React, { useEffect, useState } from 'react'

const Location = ({data}) => {


  return (
    <div className='location'>
        <h1>{data.data?.name}</h1>
        <div className='parrafos'>
            <p>Type: {data.data?.dimension}</p>
            <p>Dimension: {data.data?.type}</p>
            <p>Population: {data.data?.residents.length}</p>  
        </div>
    </div>
  )
}

export default Location