import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  padding: 30px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #1e293b;
  /* border-image-slice: 1;
  border-image-source: linear-gradient(to left, #38bdf8, #1d4ed8); */
`

export const LogoWrapper = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 40px;
    height: 40px;
  }

  span {
    font-size: 1.5rem;
    font-family: Nunito, Lato;
    line-height: 160%;

    strong {
      color: ${(props) => props.theme.backgroundRed};
    }
  }
`

export const NavLinks = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 8px;
  border-radius: 6px;
  background-color: #1e293b;
  color: white;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: background-color 0.2s;

  span {
    font-size: 0.875rem;
    /* font-weight: bold; */
    line-height: 1.125rem;
  }

  :hover {
    background-color: #334155;
  }
`
