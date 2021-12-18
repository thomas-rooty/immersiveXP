import React, { useRef } from 'react'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { KernelSize, BlendFunction } from 'postprocessing'

const Effects = () => {
    // eslint-disable-next-line
    const ref = useRef()
    return (
        <EffectComposer>
            <Bloom intensity={1} luminanceThreshold={0} luminanceSmoothing={0.7} height={900} kernelSize={KernelSize.LARGE} />
            <Vignette eskil={false} offset={0.6} darkness={1} />
            <Noise premultiply blendFunction={BlendFunction.ADD} />
        </EffectComposer>
    )
}

export default Effects;