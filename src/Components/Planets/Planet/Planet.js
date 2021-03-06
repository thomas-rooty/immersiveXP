import { React, useRef } from 'react'
import { useLoader, useFrame } from "@react-three/fiber"; //Fiber React component for the Planet's atmosphere
import { DoubleSide } from 'three';
import { Detailed, Sphere, Ring, Html } from "@react-three/drei"; //Drei component 
import { TextureLoader } from "three/src/loaders/TextureLoader";

// Import styles
import './Planet.css';


const Planet = (props) => {
    //Set the refs for the Planet and Moon
    const Planet = useRef();
    const Clouds = useRef();
    const MoonPivotPoint = useRef();
    const Moon = useRef();
    const SaturnRing = useRef();

    //Get textures from their types
    const planetTex = (type) => `./planet/${props.value.planet}/${props.value.planet}_${type}.jpg`;
    const moonTex = (type) => `./moon/moon_${type}.jpg`;
    const ringTex = (type) => `./planet/saturn/ring_${type}_Radial.png`;

    //Get planet textures and clouds texture
    const [
        planetColor,
        planetDisplacement,
        planetNormal,
        moonColor,
        moonDisplacement,
        ringColor
    ] = useLoader(TextureLoader, [
        planetTex("Color"),
        planetTex("Displacement"),
        planetTex("Normal"),
        moonTex("Color"),
        moonTex("Displacement"),
        ringTex("Color")
    ]);
    const [
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

        //Make the MoonPivotPoint rotate so the Moon orbits the Planet
        MoonPivotPoint.current.rotation.y = ySpeed / 2;

        // Unload the moon and moonPivot when props.value.planet is different from "earth"
        if (props.value.planet !== "earth") {
            Moon.current.visible = false;
            MoonPivotPoint.current.visible = false;
            Clouds.current.visible = false;
        } else if (props.value.planet === "earth") {
            Moon.current.visible = true;
            MoonPivotPoint.current.visible = true;
            Clouds.current.visible = true;
        } else if (props.value.planet === "venus") {
            Clouds.current.visible = true;
        }

        if (props.value.planet === "saturn") {
            Clouds.current.visible = false;
            SaturnRing.current.visible = true;
            SaturnRing.current.rotation.x = 1.55;
        } else {
            SaturnRing.current.visible = false;
        }
    });

    // Lights
    const Lights = () => {
        return (
            <>
                <ambientLight intensity={0.01} />
                <rectAreaLight intensity={2} position={[20, 0, 20]} width={20} height={50000} />
            </>
        );
    }

    // Planet
    const PlanetObject = () => {
        return (
            <>
                <mesh ref={Planet}>
                    <Detailed distances={[0, 25, 150]}>
                        <Sphere args={[1.8, 150, 150]} >
                            <meshStandardMaterial displacementScale={0.05} map={planetColor} displacementMap={planetDisplacement} normalMap={planetNormal} />
                        </Sphere>
                        <Sphere args={[1.8, 6, 6]} >
                            <meshStandardMaterial displacementScale={0.05} map={planetColor} displacementMap={planetDisplacement} normalMap={planetNormal} />
                        </Sphere>
                        <Sphere args={[1.8, 1, 1]} >
                            <meshStandardMaterial displacementScale={0.05} map={planetColor} displacementMap={planetDisplacement} normalMap={planetNormal} />
                        </Sphere>
                    </Detailed>
                    <mesh ref={SaturnRing}>
                        <Ring args={[2.5, 3.4, 50, 50]} >
                            <meshStandardMaterial />
                            <meshBasicMaterial attach="material" map={ringColor} side={DoubleSide} transparent={true} opacity={0.5} />
                        </Ring>
                    </mesh>
                </mesh>
                <mesh ref={Clouds}>
                    <Sphere args={[1.81, 100, 100]} >
                        <meshStandardMaterial map={cloudMap} transparent={true} opacity={0.5} />
                    </Sphere>
                    <Html prepend zIndexRange={[100, 0]} position={[0, -1.5, 1.5]} transform sprite>
                        <p className='planetDesc'>{props.value.planet}</p>
                    </Html>
                </mesh>
            </>
        );
    }

    // Moon
    const MoonObject = () => {
        return (
            <mesh ref={MoonPivotPoint}>
                <boxGeometry args={[0, 0, 0]} />
                <mesh ref={Moon} position={[7, 0.2, 0]}>
                    <Detailed distances={[0, 25, 150]}>
                        <Sphere args={[0.45, 50, 50]} >
                            <meshStandardMaterial displacementScale={0.02} map={moonColor} displacementMap={moonDisplacement} />
                            <Html prepend zIndexRange={[100, 0]} position={[0, 0.5, 0.5]} transform sprite>
                                {props.value.planet === "earth" && <p className='planetDesc'>MOON</p>}
                            </Html>
                        </Sphere>
                        <Sphere args={[0.45, 6, 6]} >
                            <meshStandardMaterial displacementScale={0.02} map={moonColor} displacementMap={moonDisplacement} />
                        </Sphere>
                        <Sphere args={[0.45, 1, 1]} >
                            <meshStandardMaterial displacementScale={0.02} map={moonColor} displacementMap={moonDisplacement} />
                        </Sphere>
                    </Detailed>
                </mesh>
            </mesh>
        );
    }

    return (
        <>
            <Lights />
            <PlanetObject />
            <MoonObject />
        </>
    );
}

export default Planet;