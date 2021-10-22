import './header.scss'

export const HeaderText = () => {
    return (
        <div className="header-text-container" data-testid="headerText">
            <h1 className="header-text">Hello!</h1>
            <p className="header-text">
                Welcome to my website! See contact info below. In the articles,
                you can find more about what I do.
            </p>
            <address className="header-socials">
                <ul>
                    <li>
                        <a
                            href="https://github.com/petterigit"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="mailto:p-makela@outlook.com">
                            p-makela@outlook.com
                        </a>
                    </li>
                </ul>
            </address>
        </div>
    )
}
