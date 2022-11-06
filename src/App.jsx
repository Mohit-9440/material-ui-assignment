import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css';
export default function App() {
  const [active, setActive] = useState(false)
  const handleSubmit =(e) => {
    setActive(!active);
  }
  return (
    <div>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
    <h1>
      <button onClick={handleSubmit} className={active ? "red-btn" :"black-btn" }>Hello</button>
    </h1>
    </div>
  );
}