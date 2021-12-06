import React from 'react'
import { useLoader, useFrame } from "@react-three/fiber"; //Fiber React component for the Sun
import { Html, Detailed, Sphere } from "@react-three/drei"; //Drei component 
import { TextureLoader } from "three/src/loaders/TextureLoader";

//Get textures from their types
const sunTex = (type) => `./sun/sun_${type}.jpg`;

const Sun = () => {
    //Set the refs for the Su
    const Sun = React.useRef();

    //Get Sun textures
    const [
        sunColor,
        sunDisplacement,
        sunNormal
    ] = useLoader(TextureLoader, [
        sunTex("Color"),
        sunTex("Displacement"),
        sunTex("Normal")
    ]);

    //Animate the moon
    useFrame(({ clock }) => {
        //Set the time
        const ySpeed = (clock.getElapsedTime()) / 25;
        const xSpeed = (clock.getElapsedTime()) / 100;

        //Make the Sun rotate on itself
        Sun.current.rotation.y = ySpeed;
    });

    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight position={[20, 15, 0]} intensity={1.2} />

            <mesh ref={Sun}>
                <Detailed distances={[0, 25, 150]}>
                    <Sphere args={[1.8, 50, 50]} >
                        <meshStandardMaterial displacementScale={0.04} map={sunColor} displacementMap={sunDisplacement} normalMap={sunNormal} />
                        <Html distanceFactor={10} transform sprite portal={Moon}>
                            <p className="sunTxt">Sun</p>
                        </Html>
                    </Sphere>
                    <Sphere args={[1.8, 6, 6]} >
                        <meshStandardMaterial displacementScale={0.04} map={sunColor} displacementMap={sunDisplacement} normalMap={sunNormal} />
                    </Sphere>
                    <Sphere args={[1.8, 1, 1]} >
                        <meshStandardMaterial displacementScale={0.04} map={sunColor} displacementMap={sunDisplacement} normalMap={sunNormal} />
                    </Sphere>
                </Detailed>
            </mesh>
        </>
    );
}

export default Sun;