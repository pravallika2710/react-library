
import React, {useState} from 'react'
import {Button, Slider} from 'common-controls'

const App = () => {
  const [value, setValue] = useState(30)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button label={"Custom Button"}  onClick={() => console.log("button click")}/>
      <Slider value={value} handleChange={handleChange}/>
    </div>
  )
}

export default App