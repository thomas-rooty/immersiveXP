import React from 'react'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'
import { KernelSize, BlendFunction } from 'postprocessing'

const Effects = () => {
    const isMobile = window.innerWidth < 1220;
    return (
        <EffectComposer>
            <Bloom intensity={1} luminanceThreshold={0} luminanceSmoothing={0.7} height={900} kernelSize={KernelSize.LARGE} />
            <Noise premultiply blendFunction={BlendFunction.ADD} />
            {!isMobile && <Vignette eskil={false} offset={0.6} darkness={1} />}
        </EffectComposer>
    )
}

export default Effects;