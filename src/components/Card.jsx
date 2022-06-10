import React, { useEffect, useState } from 'react'
import axios from "axios"

const Card = ({resident}) => {

    const [character, setCharacter] = useState({})

    useEffect(() => {
      axios.get(resident)
      .then(res => setCharacter(res.data))
      .catch(err => console.error(err))
    }, [])
    
    console.log(character,"personnnnnnnnnnnn")


  return (
    <div className='card'>
        <img src={character?.image} alt="" />
        <h2>Name: {character?.name}</h2>
        <p>Status: {character?.status}</p>
        <p>Origin: {character.origin?.name}</p>
        <p>Episodes where appear: <br/>{character.episode?.length}</p>
    </div>
  )
}

export default Card