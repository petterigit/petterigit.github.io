import { ArticleSize } from './enums'

export type ArticleProps = {
    mdFile: string
    articleSize: ArticleSize
}

export type ArticleHeaderProps = {
    toggleArticle: () => void
    setArticleSize: () => void
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
