import { HeaderWrapper, Link, LogoWrapper, NavLinks } from './styles'
import tomatoSvg from '../../assets/tomato.svg'
import { ChartLine, Timer } from 'phosphor-react'

export function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src={tomatoSvg} alt="" />
        <span>
          <strong>Pomo</strong>app
        </span>
      </LogoWrapper>
      <NavLinks>
        <ul>
          <Link to="/">
            <Timer size={18} />
            <span>Timer</span>
          </Link>
          <Link to="#">
            <ChartLine size={18} />
            <span>Stats</span>
          </Link>
        </ul>
      </NavLinks>
    </HeaderWrapper>
  )
}
