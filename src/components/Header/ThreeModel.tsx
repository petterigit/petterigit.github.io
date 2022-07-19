import { useRef, useEffect } from 'react'
import * as TWEAK from 'tweakpane'
import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const sizes = { width: 200, height: 250 }

interface TweakPaneTypes {
    pane: TWEAK.Pane
    lights: THREE.PointLight[]
    camera: THREE.PerspectiveCamera
}

const DEBUG = process.env.REACT_APP_DEBUG
console.log(DEBUG)

export const ThreeModel = () => {
    const mountRef = useRef<HTMLDivElement>(document.createElement('div'))

    useEffect(() => {
        const scene = createScene()
        const camera = createCamera(0, 0.95, 1.15, -0.2, 0.065, 0)
        const renderer = createRenderer()
        const light1 = createLight(2, 1, 6)
        const light2 = createLight(-2, 1, 6)
        const clock = new THREE.Clock()

        let mixer: THREE.AnimationMixer

        const loader = new GLTFLoader()
        loader.load(
            `${process.env.PUBLIC_URL}/models/vilperi.glb`,
            function (gltf) {
                let model = gltf.scene
                scene.add(model)

                mixer = new THREE.AnimationMixer(model)
                const clips = gltf.animations
                const clip = THREE.AnimationClip.findByName(clips, 'Idle')
                const action = mixer.clipAction(clip)
                action.play()
                tick()
            },
            undefined,
            function (e) {
                console.error(e)
            }
        )
        scene.add(camera)
        scene.add(light1)

        /* Debug */
        if (DEBUG === 'true') addDebugFunctions(scene, [light1, light2], camera)

        /* Render */
        const tick = () => {
            const deltaTime = clock.getDelta()
            if (mixer) {
                mixer.update(deltaTime)
            }
            renderer.render(scene, camera)
            window.requestAnimationFrame(tick)
        }

        mountRef.current.appendChild(renderer.domElement)
    }, [mountRef])

    return <div ref={mountRef}></div>
}

const createScene = () => {
    const scene = new THREE.Scene()
    return scene
}

const createCamera = (
    posX: number,
    posY: number,
    posZ: number,
    rotX: number,
    rotY: number,
    rotZ: number
) => {
    const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        100
    )
    camera.position.set(posX, posY, posZ)
    camera.rotation.set(rotX, rotY, rotZ)
    return camera
}

const createRenderer = () => {
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    return renderer
}

const createLight = (posX: number, posY: number, posZ: number) => {
    const pointLight = new THREE.PointLight(0xffffff, 1.1)
    pointLight.position.set(posX, posY, posZ)
    return pointLight
}

const addDebugFunctions = (
    scene: THREE.Scene,
    tweakedLights: THREE.PointLight[],
    tweakedCamera: THREE.PerspectiveCamera
): void => {
    const pane = new TWEAK.Pane()
    addTweakPane({ pane: pane, lights: tweakedLights, camera: tweakedCamera })
    tweakedLights.forEach((light) => {
        const helper = new THREE.PointLightHelper(light, 0.1)
        scene.add(helper)
    })
}

const presetString = (title: string, value: string): string => {
    return `${title} - ${value}`
}

const addTweakPane = ({ pane, lights, camera }: TweakPaneTypes) => {
    /* Lighting */
    lights.forEach((light, i) => {
        const title = `Lightning ${i}`
        const lightingFolder = pane.addFolder({ title: title })
        lightingFolder.addInput(light.position, 'x', {
            min: -4,
            max: 4,
            step: 0.01,
            presetKey: presetString(title, 'x'),
        })
        lightingFolder.addInput(light.position, 'y', {
            min: 0,
            max: 10,
            step: 0.01,
            presetKey: presetString(title, 'y'),
        })
        lightingFolder.addInput(light.position, 'z', {
            min: -0.5,
            max: 10,
            step: 0.01,
            presetKey: presetString(title, 'z'),
        })
        lightingFolder.addInput(light, 'intensity', {
            min: 0,
            max: 10,
            step: 0.1,
            presetKey: presetString(title, 'intensity'),
        })
    })

    /* Camera */
    const cameraFolder = pane.addFolder({ title: 'Camera' })
    cameraFolder.addInput(camera.position, 'x', {
        min: -1,
        max: 4,
        step: 0.001,
        presetKey: presetString('camera', 'positionX'),
    })
    cameraFolder.addInput(camera.position, 'y', {
        min: -1,
        max: 4,
        step: 0.001,
        presetKey: presetString('camera', 'positionY'),
    })
    cameraFolder.addInput(camera.position, 'z', {
        min: -1,
        max: 10,
        step: 0.001,
        presetKey: presetString('camera', 'positionZ'),
    })
    cameraFolder.addInput(camera.rotation, 'x', {
        min: -1,
        max: 1,
        step: 0.001,
        presetKey: presetString('camera', 'rotationX'),
    })
    cameraFolder.addInput(camera.rotation, 'y', {
        min: -1,
        max: 1,
        step: 0.001,
        presetKey: presetString('camera', 'rotationY'),
    })
    cameraFolder.addInput(camera.rotation, 'z', {
        min: -1,
        max: 1,
        step: 0.001,
        presetKey: presetString('camera', 'rotationZ'),
    })

    const btn = pane.addButton({
        title: 'Export Settings to Console',
    })
    btn.on('click', function () {
        const preset = pane.exportPreset()
        console.log(preset)
    })
}
