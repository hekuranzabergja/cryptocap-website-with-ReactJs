import React from 'react'
import Button from '../Button/Button'
import './Header.css'

function Header(props) {
  return (
    <div className='header'>
        <h1 className='title'>Start and Build Your Crypto Portfolio Here</h1>
        <p className='description'> Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.</p>
    <div className='button'>
    <Button type='submit'>Get Started</Button>
    </div>
    </div>
  )
}

export default Header