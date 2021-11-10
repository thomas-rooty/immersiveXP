import React from 'react'
import { useLoader, useFrame } from "@react-three/fiber"; //Fiber React component for the Earth's atmosphere
import { TextureLoader } from "three/src/loaders/TextureLoader";

//Get textures from their types
const earthTex = (type) => `./earth/earth_${type}.jpg`;
const moonTex = (type) => `./moon/moon_${type}.jpg`;

const Earth = () => {
    //Set the refs for the Earth and Moon
    const Earth = React.useRef();
    const Clouds = React.useRef();
    const MoonPivot = React.useRef();
    const Moon = React.useRef();

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
        Moon.current.rotation.x = xSpeed * 10;
        Moon.current.rotation.y = ySpeed * 10;

        //Make the earth rotate on itself
        Earth.current.rotation.z = ySpeed;
        Earth.current.rotation.y = ySpeed;

        //Make the clouds rotates on themselves
        Clouds.current.rotation.z = ySpeed * 1.2;
        Clouds.current.rotation.y = ySpeed * 1.1;

        //Make the MoonPivot rotate so the Moon orbits the Earth
        MoonPivot.current.rotation.y = ySpeed;
    });

    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[20, 20, 0]} intensity={0.8} />
            <mesh ref={Earth}>
                {/* Width and height segments for displacementMap */}
                <sphereBufferGeometry args={[1.8, 100, 100]} />
                <meshStandardMaterial displacementScale={0.04} map={earthColor} displacementMap={earthDisplacement} normalMap={earthNormal} />

                <mesh ref={MoonPivot}>
                    <boxGeometry args={[0, 0, 0]} />
                    <mesh ref={Moon} position={[7, 0.2, 0]}>
                        {/* Width and height segments for displacementMap */}
                        <sphereBufferGeometry args={[0.45, 100, 100]} />
                        <meshStandardMaterial displacementScale={0.05} map={moonColor} displacementMap={moonDisplacement} />
                    </mesh>
                </mesh>
                <mesh ref={Clouds}>
                    {/* Width and height segments for displacementMap */}
                    <sphereBufferGeometry args={[1.82, 100, 100]} />
                    <meshStandardMaterial
                        map={colorMap} transparent={true} opacity={1}
                    />
                </mesh>
            </mesh>

        </>
    );
}

export default Earth;