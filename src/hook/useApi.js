import axios from "axios"
import { useEffect, useState } from "react"

let numb = Number( Math.floor(Math.random() * (126 - 1) + 1))


const useApi = (n = numb) => {
    const [data, setData] = useState({})
    
  useEffect(() => {


    const URL = `https://rickandmortyapi.com/api/location/${n}`;
    axios.get(URL)
    .then(res=>setData(res))
  }, [n])

  return data
  
}

export default useApi