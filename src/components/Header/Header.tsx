import './header.scss'

import { HeaderImage } from './HeaderImage'
import { HeaderText } from './HeaderText'

export const Header = () => {
    return (
        <header className="header" data-testid="header">
            <HeaderText />
            <HeaderImage />
        </header>
    )
}
