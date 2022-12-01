import {useFrame} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {useKeyboardControls} from "./useKeyboardControls";
import {useRef} from "react";

export default function Player(){
    const ref = useRef(null);
    const { moveForward, moveBackward, moveLeft, moveRight } = useKeyboardControls();
    const MAX_SPEED = 0.05;

    useFrame(()=>{
        ref.current.position.z += (moveForward) ? -MAX_SPEED : 0;
        ref.current.position.z += (moveBackward) ? MAX_SPEED : 0;
        ref.current.position.x += (moveRight) ? MAX_SPEED : 0;
        ref.current.position.x += (moveLeft) ? -MAX_SPEED : 0;
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
                <mesh
                    position={[0, 2, 0]}
                >
                    <boxBufferGeometry attach="geometry" />
                    <meshLambertMaterial attach="material" color="hotpink" />
                </mesh>
            </group>
        </>
    );
}