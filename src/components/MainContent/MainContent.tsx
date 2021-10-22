import './maincontent.scss'
import { Article } from './Article'
import { Navigation } from './Navigation/Navigation'

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { articles } from '../../static/articles/articleContent'
import { articleNavHeaders } from '../../static/articles/articleContent'

export const MainContent = () => {
    return (
        <div className="app-main" data-testid="mainContent">
            <Navigation articleNavHeaders={articleNavHeaders} />
            <Switch>
                {articles.map((article) => (
                    <Route key={article.path} exact path={article.path}>
                        <Article mdFile={article.mdFile} />
                    </Route>
                ))}
            </Switch>
        </div>
    )
}
