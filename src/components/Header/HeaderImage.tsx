import './header.scss'

import { WEBGL } from './WebGL.js'
import { ThreeModel } from './ThreeModel'

export const HeaderImage = () => {
    return (
        <div className="header-image-container" data-testid="headerImage">
            {WEBGL.isWebGLAvailable() ? (
                <ThreeModel />
            ) : (
                <img
                    className="header-image"
                    alt='A "self" portrait'
                    src="https://images.unsplash.com/photo-1579972383667-4894c883d674?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                />
            )}
        </div>
    )
}
