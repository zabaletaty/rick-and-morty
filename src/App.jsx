import { useState } from 'react';
import './App.css'
import Card from './components/Card';
import Location from './components/Location';
import useApi from './hook/useApi'

function App() {

  const [inputNumber, setInputNumber] = useState()
  
  const data = useApi(inputNumber)

  console.log(data);


  const onSubmitFunction = e =>{
    e.preventDefault()

    setInputNumber(e.target.children[0].value)
  }

  return (
    <div className="App">
      <div className='form'>
        <form onSubmit={onSubmitFunction} action="">
          <input type="number" />
          <button>hi</button>
        </form>
      </div>
      <Location data={data}/>
      <div className='all-card'>
        {
          data.data?.residents.map(resident =>(
            <Card 
              resident={resident}
              key={resident}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
