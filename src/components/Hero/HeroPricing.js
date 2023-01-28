import styled from 'styled-components'

const HeroContainer = styled.div `
    position: relative;
    display: flex;
    width: 100%;
    height: 49rem;
    margin-bottom: 12rem;
`

const HeroContainerContent = styled.div `
    padding: 0 6.5%;
    width: 42%;
    height: 100%;
    background-color: #000;
    color: #fff;
`


const HeroImage = styled.img `
    width: 58%;
    height: 100%;
`

const HeroContentTitle = styled.h2 `
  width: 37.6rem;
  margin-top: 17.3rem;
  margin-bottom: 2.1rem;
  font-size: 4rem ;
  font-weight: 700;
  line-height: 4.8rem ;
  letter-spacing: 0.417rem ;
  text-transform: uppercase;
`

const HeroContentSubTitle = styled.p `
  width: 37.6rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5rem;
  opacity: 60%;
`


const HeroStripe = styled.div `
  position: absolute;
  top: 35%;
  left: 0;
  width: 0.6rem;
  height: 14.4rem;
  background: linear-gradient(rgba(255, 197, 147, 1), rgba(188, 113, 152, 1), rgba(90, 119, 255, 1));
`


export const HeroPricing = () => {

  return (

    <HeroContainer>

        { /*Left side */ }
        <HeroContainerContent>
           <HeroContentTitle> Pricing  </HeroContentTitle>
           <HeroContentSubTitle> Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos. </HeroContentSubTitle>
          
           <HeroStripe></HeroStripe> 
        </HeroContainerContent>


        { /*Right side */ }
        <HeroImage src='/images/pricing/hero.jpg' alt='a woman looks on her photographic camera with the sunset as background'  />

    </HeroContainer>
  )
}
