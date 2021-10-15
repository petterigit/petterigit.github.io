export type ArticleProps = {
    header: string
    imgsrc: string
    text: string
    articleLinks: string[]
}

export type MainContentProps = {
    articleNumber: number
}

export type HeaderProps = {
    articleNavHeaders: { text: string; ref: string }[]
}
