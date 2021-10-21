import './header.scss'

import { useRef, useEffect } from 'react'
import * as TWEAK from 'tweakpane'
import * as THREE from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// @ts-ignore
import vilperi from './vilperi.glb'

const sizes = { width: 200, height: 250 }

type tweakPaneTypes = {
    pane: TWEAK.Pane
    light: THREE.PointLight
    camera: THREE.PerspectiveCamera
}

const DEBUG = true

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
            vilperi,
            function (gltf) {
                let model = gltf.scene
                scene.add(model)

                mixer = new THREE.AnimationMixer(model)
                const clips = gltf.animations
                const clip = THREE.AnimationClip.findByName(clips, 'Idle')
                const action = mixer.clipAction(clip)
                action.play()

                tick()
                //createGUI( model, gltf.animations );
            },
            undefined,
            function (e) {
                console.error(e)
            }
        )
        scene.add(camera)
        scene.add(light1)

        /* Debug */
        if (DEBUG) {
            const pane = new TWEAK.Pane()
            addTweakPane({ pane: pane, light: light1, camera: camera })
            const pointLightHelper1 = new THREE.PointLightHelper(light1, 0.1)
            scene.add(pointLightHelper1)
            const pointLightHelper2 = new THREE.PointLightHelper(light2, 0.1)
            scene.add(pointLightHelper2)
        }

        /* Animations */

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

const addTweakPane = ({ pane, light, camera }: tweakPaneTypes) => {
    /* Lighting */
    const lightingFolder = pane.addFolder({ title: 'Lighting' })
    lightingFolder.addInput(light.position, 'x', {
        min: -4,
        max: 4,
        step: 0.01,
    })
    lightingFolder.addInput(light.position, 'y', {
        min: 0,
        max: 10,
        step: 0.01,
    })
    lightingFolder.addInput(light.position, 'z', {
        min: -0.5,
        max: 10,
        step: 0.01,
    })
    lightingFolder.addInput(light, 'intensity', { min: 0, max: 10, step: 0.1 })

    /* Camera */
    const cameraFolder = pane.addFolder({ title: 'Camera' })
    cameraFolder.addInput(camera.position, 'x', {
        min: -1,
        max: 4,
        step: 0.001,
    })
    cameraFolder.addInput(camera.position, 'y', {
        min: -1,
        max: 4,
        step: 0.001,
    })
    cameraFolder.addInput(camera.position, 'z', {
        min: -1,
        max: 10,
        step: 0.001,
    })
    cameraFolder.addInput(camera.rotation, 'x', {
        min: -1,
        max: 1,
        step: 0.001,
    })
    cameraFolder.addInput(camera.rotation, 'y', {
        min: -1,
        max: 1,
        step: 0.001,
    })
    cameraFolder.addInput(camera.rotation, 'z', {
        min: -1,
        max: 1,
        step: 0.001,
    })

    const btn = pane.addButton({
        title: 'Export Settings to Console',
    })
    btn.on('click', function () {
        const preset = pane.exportPreset()
        console.log(preset)
    })
}
