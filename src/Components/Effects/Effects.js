import React, { useRef } from 'react'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { KernelSize } from 'postprocessing'

const Effects = () => {
    // eslint-disable-next-line
    const ref = useRef()
    return (
        <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.5} height={900} kernelSize={KernelSize.LARGE} />
            <Vignette eskil={false} offset={0.1} darkness={1.5} />
        </EffectComposer>
    )
}

export default Effects;