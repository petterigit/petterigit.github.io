export type ArticleProps = {
    mdFile: string
}

export type ArticleHeaderProps = {
    toggleArticle: () => void
}

export type EasterArticleProps = {
    toggleArticle: () => void
}

export type MainContentProps = {
    toggleArticle: () => void
}

export type HeaderProps = {
    articleNavHeaders: { text: string; ref: string }[]
}
