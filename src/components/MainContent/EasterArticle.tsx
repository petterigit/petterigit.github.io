import { EasterArticleProps } from '../../types/propTypes'

export const EasterArticle = ({ toggleArticle }: EasterArticleProps) => {
    return (
        <div className="easter-content">
            <p> Well, now what? </p>
            <input
                alt="Re-open window"
                type="image"
                src={`${process.env.PUBLIC_URL}/images/openWindow.png`}
                onClick={toggleArticle}
            />
        </div>
    )
}
