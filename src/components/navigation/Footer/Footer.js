import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterContainer = styled.div `
    width: 100%;
    height: 25rem;
    padding: 6.4rem 0;
    background-color: #000;
    color: #fff;
`

const ContainerContent = styled.div `
    display: flex;
    width: auto;
    height: 12.2rem;
    margin-left: 12%;
    margin-right: 11.5%;
`

const ContainerLeft = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-right: 11rem;
`

const ContainerLogo = styled.div `
    display: flex;
`

const LogoImage = styled.img `
    margin-right: 0.8rem;
`

const ContainerFlexEnd = styled.div `
    display: flex;
    justify-content: end;
    align-items: center;
`

const SocialMediaLink = styled.a `
    margin-right: 1.3rem;
    cursor: pointer;
`

const ContainerMiddle = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-right: 43rem;
`

const ContainerMiddleLink = styled(Link) `
    font-size: 1.2rem;
    font-weight: 700;
    line-height:  1.562rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;

    :hover {
        opacity: 30%;
    }
`

const ContainerRight = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
` 


const TextCTA = styled.p `
    margin-right: 1.6rem;
    font-size:  1.2rem;
    font-weight: 700;
    line-height: 1.562rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    cursor: pointer;

    :hover {
        text-decoration: underline;
    }
`

const TextCopyright = styled.p `
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.953rem;
    opacity: 50.25%;
`

export const Footer = () => {

  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false)  
  const [active3, setActive3] = useState(false)  
  const [active4, setActive4] = useState(false)  
  const [active5, setActive5] = useState(false)    

  return (

    <FooterContainer>
        <ContainerContent>

            {/*Left Section */}
            <ContainerLeft>
                <ContainerLogo>
                    <LogoImage src='/icons/logo/photosnap_logo.svg' alt='logo' />
                    <img src='/icons/logo/photosnap_logo_text_white.svg' alt='photosnap logo text'  />
                </ContainerLogo>

                <ContainerFlexEnd>
                    <SocialMediaLink 
                        href='#' 
                        onMouseEnter={()=> setActive1(true)} 
                        onMouseLeave={()=> setActive1(false)}>

                        { !active1 ? <img src='/icons/social_media/facebook_icon_white.svg' alt='facebook icon'/> :
                            <img src='/icons/social_media/facebook_icon_color.svg' alt='facebook icon'/>  }
                    </SocialMediaLink>

                    <SocialMediaLink 
                        href='#'
                        onMouseEnter={()=> setActive2(true)} 
                        onMouseLeave={()=> setActive2(false)}
                        >

                        { !active2 ? <img src='/icons/social_media/youtube_icon_white.svg' alt='youtube icon'/> :
                            <img src='/icons/social_media/youtube_icon_color.svg' alt='youtube icon'/>  }
                    </SocialMediaLink>

                    <SocialMediaLink 
                        href='#'
                        onMouseEnter={()=> setActive3(true)} 
                        onMouseLeave={()=> setActive3(false)}
                    >
                    
                        { !active3 ? <img src='/icons/social_media/twitter_icon_white.svg' alt='twitter icon'/> :
                            <img src='/icons/social_media/twitter_icon_color.svg' alt='twitter icon'/>  }
                    </SocialMediaLink>

                    <SocialMediaLink 
                        href='#'
                        onMouseEnter={()=> setActive4(true)} 
                        onMouseLeave={()=> setActive4(false)}
                        >

                        { !active4 ? <img src='/icons/social_media/pinterest_icon_white.svg' alt='pinterest icon'/> :
                            <img src='/icons/social_media/pinterest_icon_color.svg' alt='pinterest icon'/>  }
                    </SocialMediaLink>

                    <SocialMediaLink 
                        href='#'
                        onMouseEnter={()=> setActive5(true)} 
                        onMouseLeave={()=> setActive5(false)}
                        >

                        { !active5 ? <img src='/icons/social_media/instagram_icon_white.svg' alt='instagram icon'/> :
                            <img src='/icons/social_media/instagram_icon_color.svg' alt='instagram icon'/>  }
                    </SocialMediaLink>
                </ContainerFlexEnd>
            </ContainerLeft>

            {/* Middle Section */}
            <ContainerMiddle>
                <ContainerMiddleLink to="/"> Home</ContainerMiddleLink>
                <ContainerMiddleLink to="/stories">Stories</ContainerMiddleLink>
                <ContainerMiddleLink to="/features" >Features</ContainerMiddleLink>
                <ContainerMiddleLink to="/pricing" >Pricing</ContainerMiddleLink>
            </ContainerMiddle>


            {/*Right Section */}
            <ContainerRight>
                <ContainerFlexEnd>
                    <TextCTA>Get an Invite</TextCTA>
                    <img src='/icons/functionality/large_arrow_right_white.svg' alt='large arrow right'   />
                </ContainerFlexEnd>

                <ContainerFlexEnd>
                    <TextCopyright>Copyright 2019. All Rights Reserved</TextCopyright>
                </ContainerFlexEnd>
            </ContainerRight>

        </ContainerContent>
    </FooterContainer>
  )
}
