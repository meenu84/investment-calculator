import React from 'react'
import imgs from "../assets/investment-calculator-logo.png"
const Header = () => {
  return (
    <header id='header'>
        <img src={imgs} alt="" />
        <h1>Investment Calculator</h1>

    </header>
  )
}

export default Header