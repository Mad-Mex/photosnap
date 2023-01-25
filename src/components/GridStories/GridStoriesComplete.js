import styled from "styled-components"
import { stories } from "../../data/stories.data"
import { CardStory } from "../Card/CardStory"


const GridContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`


export const GridStoriesComplete = () => {

  return (

    <GridContainer>

      { stories.map((story, index) => (

        <CardStory
          key={ index }
          story={ story }
          />
        ))}

    </GridContainer>
  )
}
