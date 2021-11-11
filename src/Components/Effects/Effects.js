import React, { useRef } from 'react'
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing'
import { KernelSize, BlendFunction } from 'postprocessing'
import { ContactShadows } from '@react-three/drei'

const Effects = () => {
    // eslint-disable-next-line
    const ref = useRef()
    return (
        <EffectComposer>
            <Bloom intensity={1.2} luminanceThreshold={0} luminanceSmoothing={0.9} height={900} kernelSize={KernelSize.SMALL} />
            <Vignette eskil={false} offset={0.1} darkness={1.5} />
            <Noise premultiply blendFunction={BlendFunction.ADD} />
            <ContactShadows />
        </EffectComposer>
    )
}

export default Effects;