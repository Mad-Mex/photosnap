import { GridStoriesComplete } from '../components/GridStories/GridStoriesComplete'
import { HeroStories } from '../components/Hero/HeroStories'
import { Footer } from '../components/navigation/Footer/Footer'



export const StoriesPage = () => {

  return (
  
    <div>

      { /*Hero Stories */ }
      <section>
        <HeroStories />
      </section>


      {/*Grid Stories */}
      <section>
        <GridStoriesComplete />
      </section>

    </div>
  )
}
