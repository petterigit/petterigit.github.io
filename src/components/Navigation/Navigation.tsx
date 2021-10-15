import React from 'react'
import './navigationbar.scss'
import { HeaderProps } from '../../types/propTypes'

import { Link } from 'react-router-dom'

export const Navigation = ({ articleNavHeaders }: HeaderProps) => {
    return (
        <nav className="navigation-bar" data-testid="navigation-bar">
            {articleNavHeaders && (
                <ul>
                    {articleNavHeaders.map((header, i) => (
                        <li key={i}>
                            <Link to={header.ref} data-testid={header.text}>
                                {header.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}
