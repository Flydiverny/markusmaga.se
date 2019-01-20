import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { animated, Trail, interpolate } from 'react-spring'
const config = { mass: 5, tension: 2000, friction: 200 }
const items = ['M', 'a', 'r', 'k', 'u', 's', '\u00a0', 'M', 'a', 'g', 'a']
const Title = styled.h1`
  font-family: avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto,
    noto, segoe ui, arial, sans-serif;
  display: flex;
  will-change: transform, opacity;
  font-weight: 800;
  color: #db7093;
  font-size: 8vw;
  margin: 0;
`

const Links = styled.div`
  font-size: 2em;
`

const LinkItem = styled.span`
  &+&::before {
    content: ' / '
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    border-bottom: 2px solid palevioletred;
    background: #fde4f2;
  }
`;

const Header = () => (
  <div>
    <Title>
      <Trail
        native
        config={config}
        items={items}
        to={{
          opacity: 1,
          x: 0,
          height: 80,
        }}
        from={{ opacity: 0, x: 20, height: 0 }}
      >
        {item => ({ x, height, ...rest }) =>
         <animated.span key={rest.key}
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            {item}
          </animated.span>}
      </Trail>
    </Title>
    <Links>
      <LinkItem><Link href="https://github.com/Flydiverny">github</Link></LinkItem>
      <LinkItem><Link href="https://linkedin.com/in/markusmaga">linkedin</Link></LinkItem>
      <LinkItem><Link href="https://stackoverflow.com/users/598962/markus-maga">stackoverflow</Link></LinkItem>
      <LinkItem><Link href="mailto:markus@maga.se">email</Link></LinkItem>
    </Links>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
