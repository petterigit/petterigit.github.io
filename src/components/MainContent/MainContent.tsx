import './maincontent.scss'
import { Article } from './Article'
import { Navigation } from './Navigation/Navigation'
import { ArticleHeader } from './ArticleHeader'
import { Switch, Route } from 'react-router-dom'
import { articles } from '../../utils/articleContent'
import { articleNavHeaders } from '../../utils/articleContent'
import { MainContentProps } from '../../types/propTypes'

export const MainContent = ({ toggleArticle }: MainContentProps) => {
    return (
        <div className="article-window">
            <ArticleHeader toggleArticle={toggleArticle} />
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
