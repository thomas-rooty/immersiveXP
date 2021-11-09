import React, { useRef } from 'react'
import { useLoader, useFrame } from "@react-three/fiber"; //Fiber React component for the Earth's atmosphere
import { TextureLoader } from "three/src/loaders/TextureLoader";

//Initialize the Earth's clouds
const Clouds = () => {
  const Clouds = React.useRef();

  const [
    colorMap
  ] = useLoader(TextureLoader, ["./earth/earth_Clouds.png"]);

  useFrame(({ clock }) => {
    const ySpeed = (clock.getElapsedTime())/50;
    const xSpeed = (clock.getElapsedTime())/250;
    Clouds.current.rotation.x = xSpeed;
    Clouds.current.rotation.y = ySpeed;
  });

  return (
    <>
      <mesh ref={Clouds}>
        {/* Width and height segments for displacementMap */}
        <sphereBufferGeometry args={[1.82, 100, 100]} />
        <meshStandardMaterial
          map={colorMap} transparent={true} opacity={1}
        />
      </mesh>
    </>
  );
}

export default Clouds;