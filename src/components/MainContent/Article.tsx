import './maincontent.scss'
import { ArticleProps } from '../../types/propTypes'

export const Article = ({
    header,
    imgsrc,
    text,
    articleLinks,
}: ArticleProps) => {
    return (
        <article className="app-main" data-testid="article">
            <div className="article-preview">
                <h2 className="article-header">{header}</h2>
                <img
                    className="article-image"
                    src={imgsrc}
                    alt="Project Preview"
                />
                <div className="article-text">
                    <p>{text}</p>
                    {articleLinks && (
                        <ul>
                            {articleLinks.map((link, i) => (
                                <li key={i}>{link}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </article>
    )
}
