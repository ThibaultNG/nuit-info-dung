
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Shape } from "three";

import { useThree } from '@react-three/fiber'
import { useMemo } from 'react'
import { Raycaster, Vector3 } from 'three'
/*
export default function Wall(){
    const wallRef = useRef(null);
    useFrame(() =>{
        wallRef.current.scale.x = 10;
        wallRef.current.scale.y = 10;
    });


    document.onkeydown = function(e) {
        if(e.keyCode === 37){
            console.log("37")
        }


    }
    return (
      <mesh ref={wallRef}>
        <boxGeometry attach="geometry" arg={[10,10,10]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    );
}
*/