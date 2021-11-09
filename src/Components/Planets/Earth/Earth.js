import React from 'react'
import { useLoader } from "@react-three/fiber"; //Fiber React component for the Earth's atmosphere
import { TextureLoader } from "three/src/loaders/TextureLoader";

//Get textures from their types
const name = (type) => `earth_${type}.jpg`;

const Earth = () => {
    const [
        colorMap,
        displacementMap,
        normalMap
    ] = useLoader(TextureLoader, [
        name("Color"),
        name("Displacement"),
        name("Normal")
    ]);
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight position={[20, 20, 0]} intensity={0.8} />
            <mesh>
                {/* Width and height segments for displacementMap */}
                <sphereBufferGeometry args={[1.8, 100, 100]} />
                <meshStandardMaterial
                    displacementScale={0.03}
                    map={colorMap}
                    displacementMap={displacementMap}
                    normalMap={normalMap}
                />
            </mesh>
        </>
    );
}

export default Earth;