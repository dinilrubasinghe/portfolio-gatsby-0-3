import React from 'react'
import Navbar from './Navbar'
import * as styles from '../styles/Layout.module.scss'

export default function Layouts({ children }) {
  return (
    <div className={styles.layouts}>
        <Navbar/>
        <div className='content'>
          { children }
        </div>
    </div>
  )
}
