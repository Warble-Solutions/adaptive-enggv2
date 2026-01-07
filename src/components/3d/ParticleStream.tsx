"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useScene } from "@/context/SceneContext";

// --- SHAPE GENERATORS ---

const COUNT = 3000; // Increased for better definition
const RADIUS = 30;

// 1. Sphere (Globe) for 'network'
const getSpherePosition = (i: number) => {
    const phi = Math.acos(-1 + (2 * i) / COUNT);
    const theta = Math.sqrt(COUNT * Math.PI) * phi;

    const x = RADIUS * Math.cos(theta) * Math.sin(phi);
    const y = RADIUS * Math.sin(theta) * Math.sin(phi);
    const z = RADIUS * Math.cos(phi);

    return new THREE.Vector3(x, y, z);
};

// 2. Solar Array (Grid of Panels) for 'solar'
const getSolarPosition = (i: number) => {
    // We want a grid of panels. Say 3x3 big panels or one large array.
    // Let's do one large detailed array for clarity.
    const side = Math.sqrt(COUNT);
    const row = Math.floor(i / side);
    const col = i % side;

    const spacing = 1.5;
    const width = side * spacing;

    // Center it
    const x = col * spacing - width / 2;
    const z = row * spacing - width / 2;

    // Create 'panels' by adding gaps every N particles
    const panelSize = 10;
    const gap = 5;

    // Adjust x/z to create gaps (grid of panels)
    const px = x + Math.floor(col / panelSize) * gap;
    const pz = z + Math.floor(row / panelSize) * gap;

    // Base position on XZ plane
    const vec = new THREE.Vector3(px, 0, pz);

    // Tilt the whole array towards camera (Sun)
    // Rotate around X axis
    vec.applyAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 4); // 45 degrees tilt

    return vec;
};

// 3. Wind Turbine for 'wind'
const getWindPosition = (i: number) => {
    // Divide particles: 30% tower, 70% blades
    const towerCount = Math.floor(COUNT * 0.2);
    const bladeCount = COUNT - towerCount;

    if (i < towerCount) {
        // Tower: Cylinder
        const height = 40;
        const radius = 1.5 + (1 - i / towerCount); // Taper slightly
        const y = (i / towerCount) * height - 20; // -20 to 20
        const angle = Math.random() * Math.PI * 2;

        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return new THREE.Vector3(x, y, z);
    } else {
        // Blades: 3 blades
        const bi = i - towerCount;
        const perBlade = bladeCount / 3;
        const bladeIndex = Math.floor(bi / perBlade); // 0, 1, 2
        const progress = (bi % perBlade) / perBlade; // 0 to 1 along blade

        const bladeLength = 35;
        const bladeWidth = 3 * (1 - progress); // Taper

        // Position along the blade length
        const r = progress * bladeLength;
        const w = (Math.random() - 0.5) * bladeWidth;

        // Base blade vector (pointing up)
        const bx = w;
        const by = r;
        const bz = 0; // Flat blade

        const vec = new THREE.Vector3(bx, by, bz);

        // Rotate blade to its angle (0, 120, 240)
        const bladeAngle = (bladeIndex * Math.PI * 2) / 3;
        vec.applyAxisAngle(new THREE.Vector3(0, 0, 1), bladeAngle);

        // Move to top of tower
        vec.y += 20;

        return vec;
    }
};

// 4. Battery Stack for 'battery'
const getBatteryPosition = (i: number) => {
    // Grid of cylinders
    const numCellsX = 5;
    const numCellsZ = 5;
    const cellsTotal = numCellsX * numCellsZ;
    const particlesPerCell = Math.floor(COUNT / cellsTotal);

    const cellIndex = Math.floor(i / particlesPerCell);
    const cellParticleIndex = i % particlesPerCell;

    // Grid coords
    if (cellIndex >= cellsTotal) return new THREE.Vector3(0, 0, 0); // Overflow buffer

    const cx = cellIndex % numCellsX;
    const cz = Math.floor(cellIndex / numCellsX);

    // Cell Dimensions
    const cellHeight = 25;
    const cellRadius = 3;
    const spacing = 8;

    // Particle in cylinder
    const y = (cellParticleIndex / particlesPerCell) * cellHeight - cellHeight / 2;
    const angle = Math.random() * Math.PI * 2;
    const r = cellRadius; // Hollow cylinder look or filled? Let's do surface
    const px = Math.cos(angle) * r;
    const pz = Math.sin(angle) * r;

    // Offset by grid position
    const offsetX = (cx - numCellsX / 2) * spacing;
    const offsetZ = (cz - numCellsZ / 2) * spacing;

    return new THREE.Vector3(px + offsetX, y, pz + offsetZ);
};


// 5. Wave (Original Plane) for 'wave'
const getWavePosition = (i: number) => {
    const side = Math.sqrt(COUNT);
    const row = Math.floor(i / side);
    const col = i % side;

    const spacing = 4; // Space between particles
    const x = (col - side / 2) * spacing;
    const z = (row - side / 2) * spacing;

    // Sine wave
    const y = Math.sin(x * 0.1) * 2 + Math.sin(z * 0.1) * 2;

    const vec = new THREE.Vector3(x, y, z);
    // Tilt the plane: Rotate around X axis
    vec.applyAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 6); // -30 degrees
    vec.y -= 10; // Lower it
    return vec;
};

const MorphingParticles = () => {
    const mesh = useRef<THREE.InstancedMesh>(null);
    const { scene } = useScene();

    // Compute all target positions for each shape once
    const positions = useMemo(() => {
        const sphere = new Float32Array(COUNT * 3);
        const solar = new Float32Array(COUNT * 3);
        const wind = new Float32Array(COUNT * 3);
        const battery = new Float32Array(COUNT * 3);
        const wave = new Float32Array(COUNT * 3);

        for (let i = 0; i < COUNT; i++) {
            const s = getSpherePosition(i);
            sphere[i * 3] = s.x; sphere[i * 3 + 1] = s.y; sphere[i * 3 + 2] = s.z;

            const sol = getSolarPosition(i);
            solar[i * 3] = sol.x; solar[i * 3 + 1] = sol.y; solar[i * 3 + 2] = sol.z;

            const w = getWindPosition(i);
            wind[i * 3] = w.x; wind[i * 3 + 1] = w.y; wind[i * 3 + 2] = w.z;

            const b = getBatteryPosition(i);
            battery[i * 3] = b.x; battery[i * 3 + 1] = b.y; battery[i * 3 + 2] = b.z;

            const wa = getWavePosition(i);
            wave[i * 3] = wa.x; wave[i * 3 + 1] = wa.y; wave[i * 3 + 2] = wa.z;
        }

        return { sphere, solar, wind, battery, wave };
    }, []);

    // Current interpolated positions
    const currentPositions = useMemo(() => {
        return Float32Array.from(positions.sphere);
    }, [positions]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        if (!mesh.current) return;

        const time = state.clock.getElapsedTime();
        const speed = scene.speed || 1;

        // Determine target array
        let target: Float32Array;
        switch (scene.variant) {
            case 'solar': target = positions.solar; break;
            case 'wind': target = positions.wind; break;
            case 'battery': target = positions.battery; break;
            case 'wave': target = positions.wave; break;
            case 'network': default: target = positions.sphere; break;
        }

        // Color interpolation
        // @ts-ignore
        mesh.current.material.color.lerp(new THREE.Color(scene.primaryColor), 0.05);

        // Movement & Morphing
        for (let i = 0; i < COUNT; i++) {
            const ix = i * 3;
            const iy = i * 3 + 1;
            const iz = i * 3 + 2;

            // Lerp current position to target
            currentPositions[ix] += (target[ix] - currentPositions[ix]) * 0.03;
            currentPositions[iy] += (target[iy] - currentPositions[iy]) * 0.03;
            currentPositions[iz] += (target[iz] - currentPositions[iz]) * 0.03;

            let x = currentPositions[ix];
            let y = currentPositions[iy];
            let z = currentPositions[iz];

            // Special Animation per variant
            if (scene.variant === 'wind') {
                // Rotate blades? 
                // Hard to do per-particle rotation efficiently here without complex math re-calc.
                // We'll rotate the whole mesh container for simplicity or just let it static.
                // Actually, let's just add 'alive' noise.
            }

            dummy.position.set(x, y, z);

            // Scale particles - Pulse effect
            const s = (Math.sin(time * 2 + i * 0.1) + 2) * 0.05;
            dummy.scale.set(s, s, s);

            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        }

        mesh.current.instanceMatrix.needsUpdate = true;

        // Global Scene Rotation
        if (scene.variant === 'wind') {
            // For wind, don't rotate the whole scene (makes the tower look weird).
            // Maybe slight sway.
            mesh.current.rotation.y = Math.sin(time * 0.5) * 0.05;
        } else if (scene.variant === 'solar') {
            // Solar: slow drift
            mesh.current.rotation.y = Math.sin(time * 0.2) * 0.1;
        } else if (scene.variant === 'wave') {
            // Wave: slow scroll or drift
            mesh.current.rotation.y = Math.sin(time * 0.1) * 0.05;
        } else {
            // Globe/Battery: Spin
            mesh.current.rotation.y += 0.001 * speed;
        }
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, COUNT]}>
            <dodecahedronGeometry args={[0.8, 0]} />
            <meshBasicMaterial color={scene.primaryColor} transparent opacity={0.6} blending={THREE.AdditiveBlending} />
        </instancedMesh>
    );
};


export default function ParticleStream() {
    const FallbackInfo = (
        <div className="w-full h-full bg-dark relative overflow-hidden">
            {/* Simple Gradient Fallback */}
        </div>
    );

    return (
        <div className="fixed inset-0 -z-10 bg-dark pointer-events-none">
            <ErrorBoundary fallback={FallbackInfo}>
                <Canvas camera={{ position: [0, 0, 70], fov: 60 }} gl={{ powerPreference: "default", alpha: true }}>
                    <MorphingParticles />
                    {/* Fog for depth */}
                    <fog attach="fog" args={['#0F172A', 40, 100]} />
                </Canvas>
            </ErrorBoundary>
        </div>
    );
}
