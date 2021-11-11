import React from 'react'
import { useFrame, useLoader } from "@react-three/fiber"; //Fiber React component for the Milkyway
import { DoubleSide } from 'three';
import { Sphere } from "@react-three/drei"; //Drei component 
import { TextureLoader } from "three/src/loaders/TextureLoader";

//Get textures from their types
const milkywayTex = (type) => `./milkyway/milkyway_${type}.png`;

const Milkyway = () => {
    //Set the refs for the Milkyway
    const Milkyway = React.useRef();

    //Get Milkyway textures
    const [
        milkywayColor
    ] = useLoader(TextureLoader, [
        milkywayTex("Color")
    ]);

    //Set Milkyway props
    useFrame(() => {
        Milkyway.current.rotation.z = -50
    });


    return (
        <>
            <mesh ref={Milkyway}>
                <Sphere args={[500, 20, 20]} >
                    <meshBasicMaterial attach="material" map={milkywayColor} side={DoubleSide} />
                </Sphere>
            </mesh>
        </>
    );
}

export default Milkyway;