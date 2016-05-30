import 'font-awesome/css/font-awesome.css'
import React from 'react'
import ReactDOM from 'react-dom'

import './app.css'

import App from 'containers/App/App'

const mountNode = document.querySelector("#root");
ReactDOM.render(<App />, mountNode);