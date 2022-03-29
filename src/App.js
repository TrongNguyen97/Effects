import { useEffect, useRef, Suspense } from 'react';
import './App.css';

import { MysteryBox } from './three/objects3D/MysteryBox'

import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

import { Canvas } from '@react-three/fiber'
import Three from './three/Three'

function App() {

    const appRef = useRef();

    useEffect(() => {
        if (!appRef.current) return;

        let mixer;

        const clock = new THREE.Clock();

        // const stats = new Stats();
        // appRef.current.appendChild(stats.dom);

        // SCENE
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0ac2f6);
        // scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

        // CAMERA
        const w = window.innerWidth;
        const h = window.innerHeight;
        const camera = new THREE.PerspectiveCamera(25, w / h, 0.1, 1000);
        camera.position.set(0, 15, 20);
        camera.lookAt(0, 0, -1);

        // RENDERER
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(w, h);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.outputEncoding = THREE.sRGBEncoding
        appRef.current.appendChild(renderer.domElement);

        // handle resize window
        window.onresize = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            renderer.setSize(newWidth, newHeight);
            camera.aspect = newWidth / newHeight
            camera.updateProjectionMatrix()
        }

        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

        // ORBIT CONTROLS

        // MESH

        // LIGHT
        const ambientLight = new THREE.AmbientLight("#ffffff", 1)
        scene.add(ambientLight)

        // LOADERS
        const loader = new GLTFLoader();

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/gltf/')
        loader.setDRACOLoader(dracoLoader)

        let mysteryBox;
        loader.load('/models/MysteryBox_22327.gltf', (gltf) => {
            console.log(gltf)

            mysteryBox = new MysteryBox(gltf)
            scene.add(mysteryBox.model);

            mysteryBox.fall(() => {
                mysteryBox.open(() => {
                    console.log('here')
                })
            });

            animate()

        }, undefined, (error) => {
            console.log(error)
        })

        // ANIMATED
        scene.rotation.y = 1
        const animate = () => {
            requestAnimationFrame(animate);

            const delta = clock.getDelta();
            mysteryBox.update(delta);

            // controls.update()

            renderer.render(scene, camera)
        }
    }, [])

    return (
        // <div ref={appRef} className="App"></div>
        <Canvas id='three-canvas-container' shadows>
            <Suspense fallback={null}>
                <Three />
            </Suspense>
        </Canvas>
    );
}

export default App;
