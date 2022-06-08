import { createContext, useState } from 'react';

import './App.scss';

import Button from './comps/button'
import Display from './comps/display'

export const choiceContext = createContext('');

function App() {

  const [choice, setChoice] = useState('')
  
  return (
    <div>
      <choiceContext.Provider value={choice}>
        <Display />
      </choiceContext.Provider>
      <choiceContext.Provider value={setChoice}>
        <Button type={"Rock"} />
        <Button type={"Paper"} />
        <Button type={"Scissors"} />
        <Button type={"Start"} />
      </choiceContext.Provider>
    </div>
  );
}

export default App;