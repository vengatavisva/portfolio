import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

/* ========== Soft Floating Particles — Light Theme ========== */
function Particles({ count = 600 }) {
    const mesh = useRef()

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const colors = new Float32Array(count * 3)

        const palette = [
            new THREE.Color('#c7d2fe'), // indigo-200
            new THREE.Color('#bae6fd'), // sky-200
            new THREE.Color('#ddd6fe'), // violet-200
            new THREE.Color('#a5f3fc'), // cyan-200
            new THREE.Color('#e0e7ff'), // indigo-100
        ]

        for (let i = 0; i < count; i++) {
            const i3 = i * 3
            const radius = 3 + Math.random() * 8
            const theta = Math.random() * Math.PI * 2
            const phi = Math.acos(2 * Math.random() - 1)
            positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
            positions[i3 + 2] = radius * Math.cos(phi)

            const c = palette[Math.floor(Math.random() * palette.length)]
            colors[i3] = c.r
            colors[i3 + 1] = c.g
            colors[i3 + 2] = c.b
        }
        return { positions, colors }
    }, [count])

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (mesh.current) {
            mesh.current.rotation.y = t * 0.015
            mesh.current.rotation.x = Math.sin(t * 0.008) * 0.03
        }
    })

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={particles.positions} itemSize={3} />
                <bufferAttribute attach="attributes-color" count={count} array={particles.colors} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.035} vertexColors transparent opacity={0.5} sizeAttenuation depthWrite={false} />
        </points>
    )
}

/* ========== Soft Morphing Sphere ========== */
function GradientSphere() {
    const meshRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.12
            meshRef.current.rotation.y = t * 0.15
            meshRef.current.position.y = Math.sin(t * 0.3) * 0.25
        }
    })

    return (
        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
            <mesh ref={meshRef} position={[2.8, 0.2, 0]} scale={1.3}>
                <icosahedronGeometry args={[1, 6]} />
                <MeshDistortMaterial
                    color="#c7d2fe"
                    emissive="#818cf8"
                    emissiveIntensity={0.05}
                    roughness={0.3}
                    metalness={0.6}
                    distort={0.2}
                    speed={1.5}
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </Float>
    )
}

/* ========== Subtle Orbit Rings ========== */
function OrbitRings() {
    const ring1 = useRef()
    const ring2 = useRef()
    const ring3 = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (ring1.current) {
            ring1.current.rotation.x = Math.PI / 3
            ring1.current.rotation.z = t * 0.15
        }
        if (ring2.current) {
            ring2.current.rotation.x = Math.PI / 4
            ring2.current.rotation.z = -t * 0.12
            ring2.current.rotation.y = t * 0.08
        }
        if (ring3.current) {
            ring3.current.rotation.x = Math.PI / 2.5
            ring3.current.rotation.z = t * 0.08
            ring3.current.rotation.y = -t * 0.04
        }
    })

    return (
        <group position={[2.8, 0.2, 0]}>
            <mesh ref={ring1}>
                <torusGeometry args={[2.2, 0.008, 16, 100]} />
                <meshStandardMaterial color="#c7d2fe" transparent opacity={0.35} />
            </mesh>
            <mesh ref={ring2}>
                <torusGeometry args={[2.6, 0.006, 16, 100]} />
                <meshStandardMaterial color="#bae6fd" transparent opacity={0.25} />
            </mesh>
            <mesh ref={ring3}>
                <torusGeometry args={[3.0, 0.005, 16, 100]} />
                <meshStandardMaterial color="#ddd6fe" transparent opacity={0.18} />
            </mesh>
        </group>
    )
}

/* ========== Soft Floating Geometrics ========== */
function FloatingGeo() {
    const torusRef = useRef()
    const boxRef = useRef()
    const coneRef = useRef()

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (torusRef.current) {
            torusRef.current.rotation.x = t * 0.25
            torusRef.current.rotation.y = t * 0.15
            torusRef.current.position.y = Math.sin(t * 0.4) * 0.4 - 1.5
        }
        if (boxRef.current) {
            boxRef.current.rotation.x = t * 0.15
            boxRef.current.rotation.z = t * 0.25
            boxRef.current.position.y = Math.sin(t * 0.35 + 1) * 0.35 + 1.5
        }
        if (coneRef.current) {
            coneRef.current.rotation.y = t * 0.3
            coneRef.current.position.y = Math.sin(t * 0.5 + 2) * 0.25
        }
    })

    return (
        <>
            <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
                <mesh ref={torusRef} position={[-3.5, -1.5, -2]}>
                    <torusKnotGeometry args={[0.4, 0.15, 64, 16]} />
                    <MeshWobbleMaterial color="#bae6fd" factor={0.2} speed={1} transparent opacity={0.35} />
                </mesh>
            </Float>
            <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.5}>
                <mesh ref={boxRef} position={[-2.5, 1.8, -1]}>
                    <octahedronGeometry args={[0.35]} />
                    <meshStandardMaterial color="#fecaca" transparent opacity={0.3} metalness={0.4} roughness={0.4} />
                </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.4}>
                <mesh ref={coneRef} position={[5, -1, -1.5]}>
                    <dodecahedronGeometry args={[0.3]} />
                    <meshStandardMaterial color="#a7f3d0" transparent opacity={0.3} metalness={0.4} roughness={0.4} />
                </mesh>
            </Float>
        </>
    )
}

/* ========== Main Scene ========== */
const HeroScene = () => {
    return (
        <div className="canvas-container">
            <Canvas
                camera={{ position: [0, 0, 7], fov: 55 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.8} />
                <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
                <directionalLight position={[-5, 5, 5]} intensity={0.4} color="#e0e7ff" />
                <pointLight position={[3, 0, 3]} intensity={0.3} color="#bae6fd" />
                <Particles />
                <GradientSphere />
                <OrbitRings />
                <FloatingGeo />
            </Canvas>
        </div>
    )
}

export default HeroScene
