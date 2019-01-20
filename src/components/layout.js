import React from 'react'
import PropTypes from 'prop-types'
import { Normalize } from 'styled-normalize'
import GlobalStyle from './globalStyle'
import styled from 'styled-components'
import Header from './header'

/* https://www.color-hex.com/color-palette/47182 */
const Main = styled.div`
  background: #f9cee7;
  box-sizing: border-box;

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => (
  <>
    <Normalize />
    <GlobalStyle />
    <Main>
      <Header />
      {/* {children} */}
    </Main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
