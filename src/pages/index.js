import React from 'react'
import Layouts from '../components/Layouts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faGithub,
  faPinterest
} from '@fortawesome/free-brands-svg-icons'

export default function Home () {
  return (
    <Layouts>
      <div>
        <div>
          <h1>Hi! I'm Dinil</h1>
          <p>Nice to meet you!✌️</p>
          <div>
            <a href='https://instagram.com/xdinil_h' target={'_blank'}>
            <FontAwesomeIcon id='arrd' icon={faInstagram} size='3x' />
            </a>
          </div>
        </div>
        <div>
          <p>A passionate Student, an Explorer, a Programmer, a Great Designer and a Hobiest</p>
        </div>
      </div>
    </Layouts>
  )
}
