import { ArticleProps } from '../../types/propTypes'

import MarkdownIt from 'markdown-it'

import { useEffect, useState } from 'react'

/* Add prism for typescript when calling Window */
declare global {
    interface Window {
        Prism: any
    }
}

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
                window.Prism?.highlightAll()
            })
    }, [mdFile])

    return (
        <article className="article">
            <p
                className="article-text"
                dangerouslySetInnerHTML={{
                    __html: articleHtml,
                }}
            ></p>
        </article>
    )
}
