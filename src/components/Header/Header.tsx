import './header.scss'

import { HeaderImage } from './HeaderImage'
import { HeaderText } from './HeaderText'

export const Header = () => {
    return (
        <header className="header">
            {/* Extra container to push content sideways*/}
            <div className="header-extra-container" />
            <HeaderText />
            <HeaderImage />
        </header>
    )
}
