import React from 'react'
import styled from 'styled-components'


const ContainerFeatures = styled.div `
    display: flex;
    justify-content: space-between;
    width: auto;
    height: 23.6rem;
    margin: 0 11.5% 12rem;
`

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 33rem;
`

const ContainerImage = styled.div `
    display: flex;
    align-items: flex-start;
    width: 7.2rem;
    height: 7.2rem;
    margin-bottom: 4.8rem;
`

const ContainerImageSmall = styled.div `
    display: flex;
    align-items: center;
    width: 7.2rem;
    height: 7.2rem;
    margin-bottom: 4.8rem;
`

const SmallImage = styled.img `
    width: 100%;
    height: 3.6rem;
`

const Title = styled.p `
    margin-bottom: 1.6rem;
    font-size: 1.8rem ;
    font-weight: 700;
    line-height: 2.5rem;
`

const Content = styled.p `
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.5rem;
    filter: opacity(60%);
`

export const ContainerFeaturesSelection = () => {

  return (
    
    <ContainerFeatures>
         { /*Icon Responsive */ }
       <Container>
            <ContainerImage>
                <img src="/icons/features/responsive.svg" alt="responsive design"  />
            </ContainerImage>
            
            <Title> 100% Responsive </Title>
            <Content> No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen. </Content>
        </Container>

        { /*Icon No-Limit */ }
       <Container>
            <ContainerImageSmall>
                <SmallImage src="/icons/features/no-limit.svg" alt=" unlimited upload"  />
            </ContainerImageSmall> 
            
            <Title> No Photo Upload Limit </Title>
            <Content> Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go. </Content>
        </Container>

        { /*Icon Embed */ }
       <Container>
            <ContainerImage>
                 <img src="/icons/features/embed.svg" alt="Embed on social media"  />
            </ContainerImage>
           
            <Title> Available to embed </Title>
            <Content> Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </Content>
        </Container>

    </ContainerFeatures>

    

    
   
  )
}
