import './header.scss'

import { WEBGL } from './WebGL.js'
import { ThreeModel } from './ThreeModel'

export const HeaderImage = () => {
    return (
        <div className="header-image-container" data-testid="headerImage">
            {WEBGL.isWebGLAvailable() ? (
                <ThreeModel />
            ) : (
                <p>
                    {' '}
                    Unable to use WEBGL to load graphics. For more information,
                    visit{' '}
                    <a href="https://get.webgl.org/">https://get.webgl.org/</a>
                </p>
            )}
        </div>
    )
}
