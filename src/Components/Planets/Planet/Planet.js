import { React, useRef } from 'react'
import { useLoader, useFrame } from "@react-three/fiber"; //Fiber React component for the Planet's atmosphere
import { Detailed, Sphere } from "@react-three/drei"; //Drei component 
import { TextureLoader } from "three/src/loaders/TextureLoader";


const Planet = (props) => {
    //Get textures from their types
    const planetTex = (type) => `./planet/${props.value.planet}/${props.value.planet}_${type}.jpg`;
    const moonTex = (type) => `./moon/moon_${type}.jpg`;

    //Set the refs for the Planet and Moon
    const Planet = useRef();
    const Clouds = useRef();
    const MoonPivot = useRef();
    const Moon = useRef();

    //Get planet textures
    const [
        planetColor,
        planetDisplacement,
        planetNormal
    ] = useLoader(TextureLoader, [
        planetTex("Color"),
        planetTex("Displacement"),
        planetTex("Normal")
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
    let [
        cloudMap
    ] = useLoader(TextureLoader, ["./planet/earth/earth_Clouds.png"]);

    //Animate the objets in the scene
    useFrame(({ clock }) => {
        //Set the time
        const ySpeed = (clock.getElapsedTime()) / 25;
        const xSpeed = (clock.getElapsedTime()) / 100;
        //Make the moon rotate on itself
        Moon.current.rotation.z = xSpeed;
        Moon.current.rotation.y = ySpeed;

        //Make the planet rotate on itself
        Planet.current.rotation.y = ySpeed;

        //Make the clouds rotates on themselves
        Clouds.current.rotation.y = ySpeed * 2;

        //Make the MoonPivot rotate so the Moon orbits the Planet
        MoonPivot.current.rotation.y = ySpeed / 2;

        // Unload the moon and moonPivot when props.value.planet is different from "earth"
        if (props.value.planet !== "earth") {
            Moon.current.visible = false;
            MoonPivot.current.visible = false;
            Clouds.current.visible = false;
        } else if (props.value.planet === "earth") {
            Moon.current.visible = true;
            MoonPivot.current.visible = true;
            Clouds.current.visible = true;
        } else if (props.value.planet === "venus") {
            Clouds.current.visible = true;
        }
    });

    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight position={[20, 15, 0]} intensity={1.2} />

            <mesh ref={Planet}>
                <Detailed distances={[0, 25, 150]}>
                    <Sphere args={[1.8, 50, 50]} >
                        <meshStandardMaterial displacementScale={0.04} map={planetColor} displacementMap={planetDisplacement} normalMap={planetNormal} />
                    </Sphere>
                    <Sphere args={[1.8, 6, 6]} >
                        <meshStandardMaterial displacementScale={0.04} map={planetColor} displacementMap={planetDisplacement} normalMap={planetNormal} />
                    </Sphere>
                    <Sphere args={[1.8, 1, 1]} >
                        <meshStandardMaterial displacementScale={0.04} map={planetColor} displacementMap={planetDisplacement} normalMap={planetNormal} />
                    </Sphere>
                </Detailed>
            </mesh>

            <mesh ref={Clouds}>
                <Sphere args={[1.82, 100, 100]} >
                    <meshStandardMaterial
                        map={cloudMap} transparent={true} opacity={1}
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

export default Planet;