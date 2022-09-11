import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <a href='https://github.com/dinilrubasinghe' target={'_blank'}>Github</a>
    </nav>
  )
}
