import { EasterArticleProps } from '../../types/propTypes'
import openWindow from './../../static/images/openWindow.png'

export const EasterArticle = ({ toggleArticle }: EasterArticleProps) => {
    return (
        <div className="easter-content">
            <p> Well, now what? </p>
            <input
                alt="Re-open window"
                type="image"
                src={openWindow}
                onClick={toggleArticle}
            />
        </div>
    )
}
