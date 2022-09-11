import React from 'react'
import Layouts from '../components/Layouts'
import * as styles from '../styles/Home.module.scss'

export default function Home () {
  return (
    <Layouts>
      <section className={styles.row}>
        <div className={styles.column}>
          <h1>Hi! I'm Dinil</h1>
          <p>Nice to meet you!✌️</p>
          <p className={styles.sum}>A passionate Student, an Explorer, a Programmer, a Great Designer and a Hobiest</p>
        </div>
        {/* <div className={styles.column}>
          <p className={styles.sum}>A passionate Student, an Explorer, a Programmer, a Great Designer and a Hobiest</p>
        </div> */}
      </section>
    </Layouts>
  )
}
