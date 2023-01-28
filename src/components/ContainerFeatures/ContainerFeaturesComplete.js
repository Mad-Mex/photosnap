import React from 'react'
import styled from 'styled-components'
import { ContainerFeaturesSelection } from './ContainerFeaturesSelection'


const ContainerFeatures = styled.div `
    display: flex;
    justify-content: space-between;
    width: auto;
    height: 23.6rem;
    margin: -1.6rem 11.5% 16rem;
`

const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 33rem;
`

const ContainerImageLarge = styled.div `
    display: flex;
    align-items: flex-start;
    width: 8.1rem;
    height: 7.2rem;
    margin-bottom: 4.8rem;
`

const ContainerImage = styled.div `
    display: flex;
    align-items: flex-start;
    width: 7.2rem;
    height: 7.2rem;
    margin-bottom: 4.8rem;
`

const ContainerImageLarger = styled.div `
    display: flex;
    align-items: flex-start;
    width: 9.1rem;
    height: 7.2rem;
    margin-bottom: 4.8rem;
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



export const ContainerFeaturesComplete = () => {

  return (

    <div>

      {/* Top Section */}
      <ContainerFeaturesSelection />


      {/* Bottom Section */}
      <ContainerFeatures>
        
        {/*Icon Custom Domain */}
        <Container>
          <ContainerImageLarge>
            <img src='/icons/features/custom-domain.svg' alt='searching icon on the browser'  />
          </ContainerImageLarge>

          <Title> Custom Domain </Title>
          <Content> With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding! </Content>
        </Container>


        {/*Icon Boost Your Experience */}
        <Container>
          <ContainerImageLarger>
            <img src='/icons/features/drag-drop.svg' alt='image carousel'  />
          </ContainerImageLarger>

          <Title> Boost Your Experience </Title>
          <Content> Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list. </Content>
        </Container>


        {/*Icon Drag & Drop Image */}
        <Container>
          <ContainerImage>
            <img src='/icons/features/boost-exposure.svg' alt='the hand icon drag & drops an image'  />
          </ContainerImage>

          <Title> Drag & Drop Image </Title>
          <Content> Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories. </Content>
        </Container>

      </ContainerFeatures>

    </div>
  )
}
