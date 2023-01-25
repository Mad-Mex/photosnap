import React from 'react'
import { ContainerFeaturesSelection } from '../components/ContainerFeatures/ContainerFeaturesSelection'
import { GridStoriesSelection } from '../components/GridStories/GridStoriesSelection'
import { HeroFeature1, HeroFeature2, HeroFeature3 } from '../components/Hero/HeroFeature'
import { Footer } from '../components/navigation/Footer/Footer'

export const HomePage = () => {

  return (

    <div>

        {/*Hero Feature*/}
        <section>
            <HeroFeature1 />
        </section>

        <section>
            <HeroFeature2 />
        </section>

        <section>
            <HeroFeature3 />
        </section>


        {/*Grid Stories*/}
        <section>
          <GridStoriesSelection />
        </section>


        {/*Container Features */}
        <section>
          <ContainerFeaturesSelection />
        </section>

    </div>
  )
}
