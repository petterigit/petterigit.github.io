import './navigationbar.scss'
import { HeaderProps } from '../../../types/propTypes'

import { Link } from 'react-router-dom'

export const Navigation = ({ articleNavHeaders }: HeaderProps) => {
    return (
        <nav className="navigation-bar">
            {articleNavHeaders && (
                <ul>
                    {articleNavHeaders.map((header, i) => (
                        <li key={i}>
                            <Link replace to={header.ref}>
                                {header.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}
