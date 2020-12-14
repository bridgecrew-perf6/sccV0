import styled from 'styled-components';

const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Fira Sans', sans-serif;
}
`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 40px;
  padding-right: 40px;

  @media screen and (max-width: 991px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const Button = styled.button`
 margin:2rem;
 padding: 0.25em 0.5rem;
 font-size: 2rem;
 border-radius: 2px;
`
export default GlobalStyle;
