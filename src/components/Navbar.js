import { Link } from 'gatsby'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as styles from '../styles/Navbar.module.scss'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='#about'>About</Link>
      <a href='https://github.com/dinilrubasinghe' target={'_blank'}>
        Github&nbsp;
        <FontAwesomeIcon icon={faUpRightFromSquare} size='1x'/>
        </a>
    </nav>
  )
}
