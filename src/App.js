import { createContext, useState } from 'react';

import './App.scss';

import Button from './comps/button'
import Display from './comps/display'

export const choiceContext = createContext('');

function App() {

  const [choice, setChoice] = useState('')
  
  return (
    <div>
      <choiceContext.Provider value={{choice,setChoice}}>
      {choice ? <Display /> : <Button type={"Start"} />}
        <Button type={"Rock"} />
        <Button type={"Paper"} />
        <Button type={"Scissors"} />
      </choiceContext.Provider>
    </div>
  );
}

export default App;