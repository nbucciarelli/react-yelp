import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import styles from './styles.module.css'

class App extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired
  }

  get content() {
    return ( <Router
                history={this.props.history}
                routes={this.props.routes} /> )
  }

  render() {
    return (
      // <div className={styles.wrapper}>
      //   <h1>
      //     <i className="fa fa-star"></i>
      //     Environment: {__NODE_ENV__}</h1>
      // </div>
      <div style={{ height: '100%' }}>
        {this.content}
      </div>
    )
  }
}

module.exports = App;
