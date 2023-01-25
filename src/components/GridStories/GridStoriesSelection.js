import styled from 'styled-components'
import { stories } from '../../data/stories.data'
import { CardHomeStory } from '../Card/CardHomeStory'


const GridContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 50rem;
  margin-bottom: 12rem;
`

export const GridStoriesSelection = () => {

  return (

    <GridContainer>
        { stories
            .slice(0,4)
            
            .map((story, index) => (
                <CardHomeStory
                    key={ index }
                    story={ story }
                 />
        ))}
    </GridContainer>
  )
}
