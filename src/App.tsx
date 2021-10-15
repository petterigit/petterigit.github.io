import './styles/layout-styles.scss'
import './styles/background.scss'
import './styles/app.scss'
import { Header } from './components/Header/Header'
import { Navigation } from './components/Navigation/Navigation'
import { MainContent } from './components/MainContent/MainContent'
import { Footer } from './components/Footer/Footer'

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { articleNavHeaders } from './utils/articleContent'

export const App = () => {
    return (
        <Router>
            <div className="app" data-testid="app">
                <Header />
                <Navigation articleNavHeaders={articleNavHeaders} />
                <MainContent />

                <Footer />
            </div>
        </Router>
    )
}
