import './styles/layout-styles.scss'
import './styles/background.scss'
import { Header } from './components/Header/Header'
import { MainContent } from './components/MainContent/MainContent'
import { Footer } from './components/Footer/Footer'

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

export const App = () => {
    return (
        <Router>
            <div className="app" data-testid="app">
                <Header />
                <MainContent />

                <Footer />
            </div>
        </Router>
    )
}
