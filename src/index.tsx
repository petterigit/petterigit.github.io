import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import './styles/Normalize.css'
import './styles/prism.css'
import './styles/global-styles.scss'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
