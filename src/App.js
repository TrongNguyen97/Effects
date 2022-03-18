import { useEffect, useRef } from 'react';
import './App.css';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment'

function App() {

    const appRef = useRef();

    useEffect(() => {
        if (appRef.current) {

            let mixer;

            const clock = new THREE.Clock();
            // SCENE
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0xbfe3dd);


            // CAMERA
            const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 2);
            camera.lookAt(0, 0, 0);

            // RENDERER
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1;
            renderer.outputEncoding = THREE.sRGBEncoding
            appRef.current.appendChild(renderer.domElement);

            const pmremGenerator = new THREE.PMREMGenerator(renderer);
            scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

            // ORBIT CONTROLS
            const controls = new OrbitControls(camera, renderer.domElement)
            controls.target.set(0, 0, 0);
            controls.update();
            controls.enablePan = false;
            controls.enableDamping = true;

            // MESH


            // LIGHT
            // const light = new THREE.DirectionalLight(0xffffff, 1)
            // light.position.set(0, 0, 1)
            // scene.add(light)

            // const backlight = new THREE.DirectionalLight(0xffffff, 1)
            // backlight.position.set(0, 0, -1)
            // scene.add(backlight)

            // LOADERS
            const loader = new GLTFLoader();

            loader.load('/models/source/Persian.glb', (glb) => {
                console.log(glb)
                scene.add(glb.scene);

                mixer = new THREE.AnimationMixer(glb.scene);
                mixer.clipAction(glb.animations[0]).play();

                animate()
            }, (xhr) => {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            }, (error) => {
                console.log(error)
            })

            // ANIMATED
            const animate = () => {
                requestAnimationFrame(animate);

                const delta = clock.getDelta();
                mixer.update(delta);

                controls.update()

                renderer.render(scene, camera)
            }
        }
    }, [])

    return (
        <div ref={appRef} className="App">
        </div>
    );
}

export default App;
