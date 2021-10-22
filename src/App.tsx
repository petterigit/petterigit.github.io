import './styles/layout-styles.scss'
import './styles/background.scss'
import { Header } from './components/Header/Header'
import { MainContent } from './components/MainContent/MainContent'
import { Footer } from './components/Footer/Footer'
import { EasterArticle } from './components/EasterArticle'

import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

export const App = () => {
    const [articleIsNotHidden, setArticleIsNotHidden] = useState(true)

    const toggleArticle = () => {
        setArticleIsNotHidden(!articleIsNotHidden)
    }
    return (
        <Router>
            <div className="app" data-testid="app">
                <Header />
                {articleIsNotHidden ? (
                    <MainContent toggleArticle={toggleArticle} />
                ) : (
                    <EasterArticle toggleArticle={toggleArticle} />
                )}

                <Footer />
            </div>
        </Router>
    )
}
