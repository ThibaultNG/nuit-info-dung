import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import { useThree } from '@react-three/fiber'
import { useMemo } from 'react'
import { Raycaster, Vector3 } from 'three'
import Player from "../player/Player";

const useForwardRaycast = (obj, player) => {
    const raycaster = useMemo(() => new Raycaster(), [])
    const pos = useMemo(() => new Vector3(), [])
    const dir = useMemo(() => new Vector3(), [])
    const scene = useThree((state) => state.scene)

    return () => {
        if (!obj.current) return []
        raycaster.set(obj.current.getWorldPosition(pos), obj.current.getWorldDirection(dir))
        return raycaster.intersectObjects(scene.children)
    }
}

export default function Comp(player) {
    const wallRef = useRef(null);
    useFrame(() =>{
        wallRef.current.scale.x = 10;
        wallRef.current.scale.y = 10;
        wallRef.current.position.y = 5;
    });
    const raycast = useForwardRaycast(wallRef, player)
    useFrame((state, delta) => {
        wallRef.current.rotation.y += 1 * delta/10
        const intersections = raycast()

        console.log(intersections.length)
        if(intersections !=0){

        }
    })

    return (
        <>
            <mesh ref={wallRef}>
                <boxGeometry />
                <meshStandardMaterial color="red" />
            </mesh>
            <mesh position={[3, 0, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="white" />
            </mesh>
        </>
    )
}
