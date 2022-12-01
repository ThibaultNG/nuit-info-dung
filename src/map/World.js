import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Stars} from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import "../styles/style.css";
import {useRef} from "react";


function Box() {

    const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
    return (
        <mesh
            onClick={() => {
                api.velocity.set(0, 2, 0);
            }}
            ref={ref}
            position={[0, 2, 0]}
        >
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    );
}

function Plane() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }));
    return (
        <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshLambertMaterial attach="material" color="lightblue" />
        </mesh>
    );
}

function Player(){
    const ref = useRef(null);

    useFrame((state, delta)=>{
        ref.current.position.x +=0.01;
    });

    return (
        <>
            <group ref={ref}>
                <PerspectiveCamera
                    makeDefault
                    position={[0, 10, 10]}
                    args={[45, 1.2, 1, 1000]}
                    rotation={[-Math.PI/6,0,0]}
                />
                <mesh castShadow receiveShadow position={[0, 2, 0]}>
                    <boxBufferGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color={"#ff0000"} />
                </mesh>
            </group>
        </>
    );
}

export default function World(){





    return (
        <Canvas>
            <Stars/>
            <ambientLight intensity={0.5}/>
            <spotLight position={[10, 15, 10]} angle={0.3}/>
            <Physics>
                <Player/>
                <Plane/>
            </Physics>
        </Canvas>
    );
};