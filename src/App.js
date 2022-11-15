import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

//React useEffect is a function that gets executed for 3 different React component lifecycles.
//Those lifecycles are componentDidMount, componentDidUpdate, and componentWillUnmount lifecycles.

function App() {
  const [message, setMessage] = useState('Hi there, how are you?');

  //But now I want to useEffect to change the message a second after the component has mounted.
  //useEffect accepts a function as it’s first argument. This function handler will take care of any side effects you like when it gets run.
  //The function is a callback function after one of the React component lifecycle has been triggered.
  useEffect(() => {
    console.log('Trigger use effect hook');

    setTimeout(() => {
      setMessage("I'm fine, thanks for asking.");
    }, 1000);
  }, []);

  return <h1>{message}</h1>; //grabbing my state variable, message, and I’m printing it to the screen.
}

export default App;
