import React from 'react'
import { ContainerFeaturesBetaPhase } from '../components/ContainerFeatures/ContainerFeaturesBetaPhase'
import { ContainerFeaturesComplete } from '../components/ContainerFeatures/ContainerFeaturesComplete'
import { HeroFeatures } from '../components/Hero/HeroFeatures'

export const FeaturesPage = () => {

  return (

    <div>

      {/*Hero Features */}
      <section>
        <HeroFeatures />
      </section>


      { /*Container Features */ }
      <section>
        <ContainerFeaturesComplete />
      </section>


      { /*Beta Phase */ }
      <section>
        <ContainerFeaturesBetaPhase />
      </section>

    </div>
  )
}
