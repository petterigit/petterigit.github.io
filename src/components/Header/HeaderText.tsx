import './header.scss'

export const HeaderText = () => {
    return (
        <div className="header-text-container" data-testid="headerText">
            <h1 className="header-text">Hello!</h1>
            <h2 className="header-text">
                Welcome to my suuuuuper cool website!
            </h2>
            <div className="header-socials">
                <ul>
                    <li>Github</li>
                    <li>Contact Info</li>
                    <li>Other Info</li>
                    <li>Give me a treat</li>
                </ul>
            </div>
        </div>
    )
}
