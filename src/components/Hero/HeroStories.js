import { useState } from 'react'
import styled from 'styled-components'


const Hero = styled.div `
    position: relative;
    width: 100%;
    height: 65rem;
`

const HeroImage = styled.img `
    width: 100%;
    height: 100%;
`

const HeroContentContainer = styled.div `
    position: absolute;
    top: 12.2rem;
    left: 11.2rem ;
    width: 38.7rem;
    height: 40.6rem;
    color: #fff;
`

const HeroHeader = styled.p `
    margin-bottom: 2.4rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.562rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
`

const HeroTitle = styled.h1 `
    margin-bottom: 1.6rem;
    font-size:  4rem;
    font-weight: 700;
    line-height: 4.8rem;
    letter-spacing: 0.417rem;
    text-transform: uppercase;
`

const HeroFlex = styled.div `
    display: flex;
    margin-bottom: 2.4rem;
`

const HeroDate = styled.p `
    margin-right: 0.9rem;
    font-size:   1.3rem;
    font-weight: 400;
    line-height:  1.693rem;
    opacity: 75%;
`

const HeroAuthor = styled.p `
    font-size:   1.3rem;
    font-weight: 400;
    line-height: 1.693rem;
`

const HeroSummarizeText = styled.p `
    margin-bottom: 2.4rem;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.5rem;
    opacity: 60%;
`

const HeroCTAContainer = styled.div `
    display: flex;
`

const HeroCTAText = styled.p `
    margin-right: 1.6rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.562rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    cursor: pointer;

    :hover { 
        text-decoration: underline;
    }
`

const HeroRadialGradient = styled.div `
    position: absolute;
    top: 7%;
    left: 0;
    width: 50%;
    height: 100%;
    background: radial-gradient(
        68.48% 68.48% at 0% 100%, 
        #FFC593 0%, 
        rgba(188, 113, 152, 0.496968) 52.36%, 
        rgba(90, 119, 255, 0.0001) 100%);
` 


export const HeroStories = () => {

  const [active, setActive] = useState(false)  

  return (

    <Hero>
        <HeroImage src='/images/stories/moon-of-appalacia.jpg' alt='moon of Appalacia'  />
        
        { active ? <HeroRadialGradient></HeroRadialGradient> : null  } 

        <HeroContentContainer>
            <HeroHeader> Last month´s featured story  </HeroHeader>
            <HeroTitle> Hazy full moon of Appalacia </HeroTitle>

            <HeroFlex>
                <HeroDate> March 2nd 2020 </HeroDate> 
                <HeroAuthor> by John Appleseed </HeroAuthor>
            </HeroFlex>
            
            <HeroSummarizeText> The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged. </HeroSummarizeText>

            <HeroCTAContainer>
                <HeroCTAText
                    onMouseEnter={() => setActive(true) }
                    onMouseLeave={() => setActive(false) }
                > Read the story</HeroCTAText>
                <img src='/icons/functionality/large_arrow_right_white.svg' alt='right arrow large'  /> 
            </HeroCTAContainer>

        </HeroContentContainer>
    </Hero>
  )
}
