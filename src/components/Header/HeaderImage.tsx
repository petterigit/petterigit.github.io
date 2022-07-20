import { isWebGLAvailable } from '../../utils/checkWebGL'
import { ThreeModel } from './ThreeModel'

export const HeaderImage = () => {
    return (
        <div className="header-image-container">
            {isWebGLAvailable() ? (
                <ThreeModel />
            ) : (
                <p>
                    Unable to use WEBGL to load a sweet 3D koala bear. WEBGL may
                    be disabled in your browser. For more information,
                    visit&nbsp;
                    <a href="https://get.webgl.org/">https://get.webgl.org/</a>
                </p>
            )}
        </div>
    )
}
