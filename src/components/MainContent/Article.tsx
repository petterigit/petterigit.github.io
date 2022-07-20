import { ArticleProps } from '../../types/propTypes'

import MarkdownIt from 'markdown-it'

import { useEffect, useState } from 'react'
import { ArticleSize } from '../../types/enums'

/* Add prism for typescript when calling Window */
declare global {
    interface Window {
        Prism: any
    }
}

export const Article = (props: ArticleProps) => {
    const { mdFile, articleSize } = props

    const [articleHtml, setArticleHtml] = useState(
        '<h2> Getting article.. </h2>'
    )

    const articleClass = (size: ArticleSize): string => {
        const articleClass = 'article'
        switch (size) {
            case ArticleSize.windowed:
                return `${articleClass} article-layout`
            case ArticleSize.full:
                return `${articleClass} article-layout-enlarged`
        }
    }

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
        <article className={articleClass(articleSize)}>
            <p
                className="article-text"
                dangerouslySetInnerHTML={{
                    __html: articleHtml,
                }}
            ></p>
        </article>
    )
}
