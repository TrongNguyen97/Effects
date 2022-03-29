import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { PerspectiveCamera, OrbitControls, Environment, useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

import { angleToRadius } from '../utils/angle'

export default function Three() {
    const orbitControlsRef = useRef(null)

    const { nodes, scene, animations } = useGLTF('/models/MysteryBox_22327.gltf')
    scene.rotation.x = 0.5
    scene.rotation.y = 1

    const { ref, mixer, names, actions, clips } = useAnimations(animations)

    useFrame((state) => {
        if (orbitControlsRef.current) {
            // const { x, y } = state.mouse;
            // orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadius(45));
            // orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadius(60))
            // orbitControlsRef.current.update()
        }
    })

    useEffect(() => {
        // Reset and fade in animation after an index has been changed
        const fallAnimate = actions[names[2]]
        const openAnimate = actions[names[0]]
        fallAnimate.loop = THREE.LoopOnce
        fallAnimate.loop = THREE.LoopOnce

        fallAnimate.fadeIn(0.5).play()
        mixer.addEventListener('finished', (e) => {
            openAnimate.fadeIn(0.5).play()
            scene.scale = 1
            
            // console.log(scene.scale)
        })
        // In the clean-up phase, fade it out
        return () => {
            fallAnimate.fadeOut(0.5)
            openAnimate.fadeOut(0.5)
        }
    }, [actions, names])

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 15]} />
            {/* <OrbitControls ref={orbitControlsRef} /> */}

            {/* mesh */}
            <group ref={ref} position={[0, 0, 3]} castShadow>
                <primitive object={scene} />
            </group>
            {/* <mesh receiveShadow>
                <planeGeometry args={[7, 7]} />
                <meshStandardMaterial color="#0ac2f6" side={THREE.DoubleSide} />
            </mesh> */}

            {/* light */}
            <ambientLight args={["#ffffff", 1]} />
            {/* <spotLight args={["#ffffff", 2, 7, angleToRadius(45), 0.4]} position={[-4, 0, 1]} castShadow /> */}

            {/* enviroment */}
            <Environment background>
                <mesh scale={10}>
                    <sphereGeometry args={[1, 64, 64]} />
                    <meshBasicMaterial side={THREE.BackSide} color="#0ac2f6" />
                </mesh>
            </Environment>
        </>
    )
}