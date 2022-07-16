
import './App.css';
import Box from './Box';
import InputBox from './InputBox';
import {useState} from 'react'
import colorNames from 'colornames'
function App() {
  const [color,setColor] = useState('')
  const [toggle,setToggle] = useState(false)
  const [hexcolor,setHexColor] = useState('')
  const handleChange = (value) => {
    setColor(value)
    setHexColor(colorNames(value))
    
  }
  return (
    <div className="App">
      <Box color={color} 
      hexcolor={hexcolor}
      toggle={toggle}
      />
      <InputBox 
      value={color} 
      onChange={handleChange}
      toggle={toggle}
      setToggle={setToggle}
      />
    </div>
  );
}

export default App;
