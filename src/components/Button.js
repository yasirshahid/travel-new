import styled from 'styled-components'
import { Link } from 'gatsby'

 const Button = styled(Link)`
  background : ${({ primary }) => (primary ? '#F26A2E' : '#077BF1')};
  whtite-space: nowarp;
  padding : ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline : none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-docoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? '50px' : 'none')};

  &:hover {
      background: ${({ primary }) => (primary ? '#077BF1' : '#F26A2E')};
      transform: translateY(-2px);

  }
`

export default Button ;