import './maincontent.scss'
import { Article } from './Article'

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { articles } from '../../utils/articleContent'

export const MainContent = () => {
    return (
        <div data-testid="mainContent">
            <Switch>
                {articles.map((article) => (
                    <Route key={article.path} exact path={article.path}>
                        <Article
                            header={article.header}
                            imgsrc={article.imgsrc}
                            text={article.text}
                            articleLinks={article.articleLinks}
                        />
                    </Route>
                ))}
            </Switch>
        </div>
    )
}
