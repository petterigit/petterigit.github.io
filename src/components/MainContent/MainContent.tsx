import './maincontent.scss'
import { Article } from './Article'

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { articles } from '../../static/articles/articleContent'

export const MainContent = () => {
    return (
        <Switch>
            {articles.map((article) => (
                <Route key={article.path} exact path={article.path}>
                    <Article mdFile={article.mdFile} />
                </Route>
            ))}
        </Switch>
    )
}
