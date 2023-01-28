import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
    position: relative;
    width: 100%;
    height: 28rem;
    color: #fff;
`

const ContainerBackgroundImage = styled.img `
    width: 100%;
    height: 100%;
`

const ContainerContent = styled.div `
    position: absolute;
    top: 26%;
    display: flex;
    justify-content: space-between;
    width: 80%;
    height:  14.4rem;
    margin: 0 11.5%;
`

const ContentTitle = styled.h2 `
    width: 40rem;
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.8rem;
    letter-spacing: 0.417rem;
    text-transform: uppercase;
`

const ContentFlex = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContentCTAText = styled.p `
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

const ContainerStripe = styled.div `
    position: absolute;
    top: 0%;
    left: 0%;
    width: 0.6rem;
    height: 28rem;
    background: linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%);
    z-index: 999;

`

export const ContainerFeaturesBetaPhase = () => {
  return (
    <Container>
        <ContainerBackgroundImage src='/images/features/bg-beta.jpg' alt='a rocky surface'/>
        <ContainerStripe></ContainerStripe>

        <ContainerContent>
            <ContentTitle> We´re in beta. Get your invite today! </ContentTitle>

            <ContentFlex>
                <ContentCTAText> Get an invite </ContentCTAText>
                <img src='/icons/functionality/large_arrow_right_white.svg' alt='right arrow large'  />
            </ContentFlex>

        </ContainerContent>

    </Container>
  )
}
