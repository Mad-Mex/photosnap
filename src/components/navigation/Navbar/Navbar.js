import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    margin: 2.8rem 11.5%;
`

const NavbarLogo = styled(Link)`
    display: flex;
`

const NavbarImageLogo = styled.img`
    margin-right: 0.8rem;
`

const NavbarLinksContainer = styled.div`
    display: flex;
`

const NavbarLink = styled(Link)`
    margin-left: 3.7rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.562rem;
    letter-spacing: 0.2rem;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;

    &:hover {
        opacity: 30%;
    }
`

const NavbarBtn = styled.button`
    width: 15.8rem;
    height: 4rem;
    background-color: #000;
    border: none;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.562rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #dfdfdf;
        color: #000;
    }
`

export const Navbar = () => {

  return (

    <NavbarContainer>

      <NavbarLogo to="/">
        <NavbarImageLogo src='/icons/logo/photosnap_logo.svg' alt='photosnap logo' />
        <img src='/icons/logo/photosnap_logo_text.svg' alt='photosnap logo' />
      </NavbarLogo>

      <NavbarLinksContainer>
        <NavbarLink to="/stories"> Stories </NavbarLink>
        <NavbarLink to="/features"> Features </NavbarLink>
        <NavbarLink to="/pricing"> Pricing </NavbarLink>
      </NavbarLinksContainer>

      <div>
        <NavbarBtn> Get an invite </NavbarBtn>
      </div>



    </NavbarContainer>
  )
}
