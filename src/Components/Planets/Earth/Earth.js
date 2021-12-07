import { React, useContext, useRef } from 'react'
import { useLoader, useFrame } from "@react-three/fiber"; //Fiber React component for the Earth's atmosphere
import { Detailed, Sphere } from "@react-three/drei"; //Drei component 
import { TextureLoader } from "three/src/loaders/TextureLoader";
import PlanetContext from '../../../Context/PlanetContext';

//Get textures from their types
const earthTex = (type) => `./earth/earth_${type}.jpg`;
const moonTex = (type) => `./moon/moon_${type}.jpg`;

const Earth = () => {
    //Set the refs for the Earth and Moon
    const Earth = useRef();
    const Clouds = useRef();
    const MoonPivot = useRef();
    const Moon = useRef();

    //Set the context
    const contextNavbar = useContext(PlanetContext);

    //Get earth textures
    const [
        earthColor,
        earthDisplacement,
        earthNormal
    ] = useLoader(TextureLoader, [
        earthTex("Color"),
        earthTex("Displacement"),
        earthTex("Normal")
    ]);

    //Get moon textures
    const [
        moonColor,
        moonDisplacement
    ] = useLoader(TextureLoader, [
        moonTex("Color"),
        moonTex("Displacement"),
    ]);

    //Get clouds textures
    const [
        colorMap
    ] = useLoader(TextureLoader, ["./earth/earth_Clouds.png"]);

    //Animate the moon
    useFrame(({ clock }) => {
        //Set the time
        const ySpeed = (clock.getElapsedTime()) / 25;
        const xSpeed = (clock.getElapsedTime()) / 100;
        //Make the moon rotate on itself
        Moon.current.rotation.z = xSpeed;
        Moon.current.rotation.y = ySpeed;

        //Make the earth rotate on itself
        Earth.current.rotation.y = ySpeed;

        //Make the clouds rotates on themselves
        Clouds.current.rotation.y = ySpeed * 2;

        //Make the MoonPivot rotate so the Moon orbits the Earth
        MoonPivot.current.rotation.y = ySpeed / 2;
    });

    return (
        <>
            {console.log("Earth component returns : " + contextNavbar.planet)}
            <ambientLight intensity={0.3} />
            <directionalLight position={[20, 15, 0]} intensity={1.2} />

            <mesh ref={Earth}>
                <Detailed distances={[0, 25, 150]}>
                    <Sphere args={[1.8, 50, 50]} >
                        <meshStandardMaterial displacementScale={0.04} map={earthColor} displacementMap={earthDisplacement} normalMap={earthNormal} />
                    </Sphere>
                    <Sphere args={[1.8, 6, 6]} >
                        <meshStandardMaterial displacementScale={0.04} map={earthColor} displacementMap={earthDisplacement} normalMap={earthNormal} />
                    </Sphere>
                    <Sphere args={[1.8, 1, 1]} >
                        <meshStandardMaterial displacementScale={0.04} map={earthColor} displacementMap={earthDisplacement} normalMap={earthNormal} />
                    </Sphere>
                </Detailed>
            </mesh>

            <mesh ref={Clouds}>
                <Sphere args={[1.82, 100, 100]} >
                    <meshStandardMaterial
                        map={colorMap} transparent={true} opacity={1}
                    />
                </Sphere>
            </mesh>

            <mesh ref={MoonPivot}>
                <boxGeometry args={[0, 0, 0]} />
                <mesh ref={Moon} position={[7, 0.2, 0]}>
                    <Detailed distances={[0, 25, 150]}>
                        <Sphere args={[0.45, 50, 50]} >
                            <meshStandardMaterial displacementScale={0.05} map={moonColor} displacementMap={moonDisplacement} />
                        </Sphere>
                        <Sphere args={[0.45, 6, 6]} >
                            <meshStandardMaterial displacementScale={0.05} map={moonColor} displacementMap={moonDisplacement} />
                        </Sphere>
                        <Sphere args={[0.45, 1, 1]} >
                            <meshStandardMaterial displacementScale={0.05} map={moonColor} displacementMap={moonDisplacement} />
                        </Sphere>
                    </Detailed>
                </mesh>
            </mesh>

        </>
    );
}

export default Earth;