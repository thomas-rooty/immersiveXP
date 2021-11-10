import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber"; //Fiber React component
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { KernelSize, BlendFunction } from 'postprocessing'

const Effects = () => {
    const ref = useRef()
    return (
        <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={900} kernelSize={KernelSize.LARGE} />
            <Vignette eskil={false} offset={0.1} darkness={1.5} />
        </EffectComposer>
    )
}

export default Effects;