import './maincontent.scss'
import { ArticleProps } from '../../types/propTypes'

import MarkdownIt from 'markdown-it'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import { useEffect, useState } from 'react'

export const Article = ({ mdFile }: ArticleProps) => {
    const [articleHtml, setArticleHtml] = useState(
        '<h2> Getting article.. </h2>'
    )

    useEffect(() => {
        const md = new MarkdownIt({ html: true })
        fetch(mdFile)
            .then((response) => response.text())
            .then((text) => {
                const htmlString = md.render(text)
                setArticleHtml(htmlString)
            })
    }, [mdFile])
    return (
        <article data-testid="article">
            <div className="article">
                <SimpleBar style={{ maxHeight: '80vh' }}>
                    <p
                        className="article-text"
                        dangerouslySetInnerHTML={{
                            __html: articleHtml,
                        }}
                    ></p>
                </SimpleBar>
            </div>
        </article>
    )
}
