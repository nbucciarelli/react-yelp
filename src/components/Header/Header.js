import React from 'react'
import { Link } from 'react-router'
import styles from './styles.module.css'

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <Link to='/'><h1>Yelpppppp</h1></Link>
        <section>
          Fullstack.io Tutorial
        </section>
      </div>
    )
  }
}

export default Header
