import { EasterArticleProps } from '../types/propTypes'

export const EasterArticle = ({ toggleArticle }: EasterArticleProps) => {
    return (
        <div>
            <p> Well, now what? </p>
            <button onClick={toggleArticle}> Open Window</button>
        </div>
    )
}
