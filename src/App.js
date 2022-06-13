import { createContext, useState } from 'react';

import './App.scss';

import Button from './comps/button'
import Display from './comps/display'

export const choiceContext = createContext('');
export const startSignalContext = createContext('');

function App() {

  const [choice, setChoice] = useState('')
  const [startSignal, setStartSignal] = useState(false)
  
  return (
    <div>
      <choiceContext.Provider value={{choice,setChoice}}>
        <startSignalContext.Provider value={{startSignal, setStartSignal}}>
          <Display />
        </startSignalContext.Provider>
        <Button type={"Rock"} />
        <Button type={"Paper"} />
        <Button type={"Scissors"} />
        {startSignal && "asd"}
      </choiceContext.Provider>
    </div>
  );
}

export default App;

