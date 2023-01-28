import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div `
    position: relative;
    display: flex;
    width: 100%;
    height: 65rem;
`

const HeroContainer2 = styled.div `
    position: relative;
    display: flex;
    width: 100%;
    height: 60rem;
`

const HeroContainerContent = styled.div `
    padding: 0 6.5%;
    width: 42%;
    height: 100%;
    background-color: #000;
    color: #fff;
`

const HeroContainerContentWhite = styled.div `
    padding: 0 6.5%;
    width: 42%;
    height: 100%;
    background-color: #fff;
    color: #000;

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
  margin-bottom: 4.8rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.5rem;
`

const HeroContentContainerCTA = styled.div `
  display: flex;
  align-items: center;
`

const HeroContentCTAText = styled.p `
  margin-right: 1.8rem;
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

const HeroStripe = styled.div `
  position: absolute;
  top: 27.5%;
  left: 0;
  width: 0.6rem;
  height: 30rem;
  background: linear-gradient(rgba(255, 197, 147, 1), rgba(188, 113, 152, 1), rgba(90, 119, 255, 1));
`


export const Hero1 = () => {

  return (

    <HeroContainer>

        { /*Left side */ }
        <HeroContainerContent>
            <HeroContentTitle> Create and share your photo stories.  </HeroContentTitle>
           <HeroContentSubTitle> Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others. </HeroContentSubTitle>
           <HeroContentContainerCTA>
              <HeroContentCTAText>Get an invite</HeroContentCTAText>
              <img src='/icons/functionality/large_arrow_right_white.svg' icon="right arrow large"   />
           </HeroContentContainerCTA>

           <HeroStripe></HeroStripe> 
        </HeroContainerContent>

        { /*Right side */ }
        <HeroImage src='/images/home/create-and-share.jpg' alt=''  />

    </HeroContainer>
  )
}



export const Hero2 = () => {

  return (

    <HeroContainer2>

        { /*Left side */ }
        <HeroImage src='/images/home/beautiful-stories.jpg' alt=''  />
        

        { /*Right side */ }
        
        <HeroContainerContentWhite>
            <HeroContentTitle> Beautiful stories every time  </HeroContentTitle>
           <HeroContentSubTitle> We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone. </HeroContentSubTitle>
           <HeroContentContainerCTA>
              <HeroContentCTAText>View the stories</HeroContentCTAText>
              <img src='/icons/functionality/large_arrow_right.svg' icon="right arrow large"   />
           </HeroContentContainerCTA>

        </HeroContainerContentWhite>

    </HeroContainer2>
  )
}



export const Hero3 = () => {

  return (

    <HeroContainer2>

        { /*Left side */ }
        <HeroContainerContentWhite>
            <HeroContentTitle> Designed for everyone </HeroContentTitle>
           <HeroContentSubTitle> Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.  </HeroContentSubTitle>
           <HeroContentContainerCTA>
              <HeroContentCTAText> View the stories</HeroContentCTAText>
              <img src='/icons/functionality/large_arrow_right.svg' icon="right arrow large"   />
           </HeroContentContainerCTA>
           
        </HeroContainerContentWhite>
        

        { /*Right side */ }
        <HeroImage src='/images/home/designed-for-everyone.jpg' alt=''  />
       

    </HeroContainer2>
  )
}
