import React, { useEffect } from 'react';
//import { Route, Switch } from 'react-router-dom';
// import './App.css';


function App(props) {
  useEffect(() => {
    console.log("Rendered");
  }, [])
  return (
    <div>
      {props.children}
    </div>
  );
}

export default App;
