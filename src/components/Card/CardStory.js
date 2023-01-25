import styled from 'styled-components'


const GridCard = styled.div `
  position: relative;
  width: 25%;
  height: 50rem;
  transition: ease-in 0.2s;
  cursor: pointer;

  :hover {
    transform: translateY(-2.4rem);
  }
`

const GridCardImage = styled.img`
  width: 100%;
  height: 100%;
`

const GridCardImageMask = styled.div `
  position: absolute;
  top: 15rem;
  width: 100%;
  height: 35rem;
  background: linear-gradient( 180deg, rgba(0, 0, 0, 0) 0.27%, rgba(0, 0, 0, 0.66) 100% );
`

const GridCardContentContainer = styled.div `
  position: absolute;
  top: 67%;
  left: 3.1rem;
  width: 28rem;
  color: #fff;
`

const GridCardContentDate = styled.p `
    margin-bottom: 0.4rem;
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.693rem;
`

const GridCardContentTitle = styled.h3 `
  margin-bottom: 1.2rem;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.5rem;
`

const GridCardContentSubTitle = styled.h3 `
  margin-bottom: 2rem;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.693rem;
`

const GridCardContentDivider = styled.div `
  width: 28rem;
  margin-bottom: 2.2rem;
  border: 0.1rem solid #fff;
  filter: opacity(25%);
`

const GridCardContentFlex = styled.div `
  display: flex;
  justify-content: space-between;
`

const GridCardContentReadMore = styled.p `
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.562rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`


export const CardStory = ({ story }) => {

  return (
   
      <GridCard>
        <GridCardImage  src={ story.image }  alt={ story.title }/> 
          <GridCardImageMask></GridCardImageMask>

          <GridCardContentContainer>
            <GridCardContentDate> { story.date } </GridCardContentDate>
            <GridCardContentTitle> { story.title } </GridCardContentTitle> 
            <GridCardContentSubTitle> { `by ${ story.author }` } </GridCardContentSubTitle> 

          <GridCardContentDivider></GridCardContentDivider>        

          <GridCardContentFlex>
            <GridCardContentReadMore> Read Story </GridCardContentReadMore>
            <img src='/icons/functionality/large_arrow_right_white.svg' alt='right arrow large'  />
          </GridCardContentFlex>

        </GridCardContentContainer>

      </GridCard>     
  )
}
