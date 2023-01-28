import React from 'react'
import { ContainerFeaturesSelection } from '../components/ContainerFeatures/ContainerFeaturesSelection'
import { GridStoriesSelection } from '../components/GridStories/GridStoriesSelection'
import { Hero1, Hero2, Hero3 } from '../components/Hero/Hero'

export const HomePage = () => {

  return (

    <div>

        {/*Hero*/}
        <section>
            <Hero1 />
        </section>

        <section>
            <Hero2 />
        </section>

        <section>
            <Hero3 />
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
