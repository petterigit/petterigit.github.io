import './maincontent.scss'
import { Article } from './Article'
import { Navigation } from './Navigation/Navigation'
import { ArticleHeader } from './ArticleHeader'
import { Switch, Route } from 'react-router-dom'
import { articles } from '../../utils/articleContent'
import { articleNavHeaders } from '../../utils/articleContent'
import { MainContentProps } from '../../types/propTypes'
import { useState } from 'react'
import { ArticleSize } from '../../types/enums'

export const MainContent = ({ toggleArticle }: MainContentProps) => {
    const [articleSize, setArticleSize] = useState(ArticleSize.windowed)

    const handleArticleSizeChange = () => {
        switch (articleSize) {
            case ArticleSize.windowed:
                setArticleSize(ArticleSize.full)
                break
            case ArticleSize.full:
                setArticleSize(ArticleSize.windowed)
                break
        }
    }

    return (
        <div className="article-window article-window-layout">
            <ArticleHeader
                toggleArticle={toggleArticle}
                setArticleSize={handleArticleSizeChange}
            />
            <Navigation articleNavHeaders={articleNavHeaders} />
            <Switch>
                {articles.map((article) => (
                    <Route key={article.path} exact path={article.path}>
                        <Article
                            mdFile={article.mdFile}
                            articleSize={articleSize}
                        />
                    </Route>
                ))}
            </Switch>
        </div>
    )
}
