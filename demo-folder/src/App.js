
import React, {useState} from 'react'
import {Button, Slider} from 'common-controls'

const App = () => {
  const [value, setValue] = useState(30)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button label={"test"}/>
      <Slider />
    </div>
  )
}

export default App