import './App.css';
import React, {useEffect} from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get("/api/config").then((res) => {
      console.log(res.data);
    });
  });
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
