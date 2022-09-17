import React from 'react'
import Layouts from '../components/Layouts'
import { StaticImage } from 'gatsby-plugin-image'
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
        <div className={styles.column}>
          <div>
          <StaticImage src='../images/Group 11.png' alt='DpBokeh' className={styles.bokeh}/>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.row}>
          <div className={styles.column2}>
            <div className={styles.knowMe}>
              <p>Hi!👋 Let's get to know me</p>
            </div>
          </div>
          <div className={styles.column2}>
            <h1 className={styles.title}>About</h1>
          </div>
        </div>
      </section>
    </Layouts>
  )
}
