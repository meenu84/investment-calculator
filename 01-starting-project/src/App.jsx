import { useState } from "react";
import Header from "./components/Header"
import UserInput from './components/UserInput'
import Results from './components/Result'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }


  return (
    <>
    <Header />
    <UserInput onChangeInput={handleChange} userInput={userInput}/>
    {!inputIsValid && <p className="center">Duration can not be negative</p>}
    {inputIsValid && <Results userInput={userInput}/>}
    </>
  )
}

export default App