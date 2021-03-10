import styled from 'styled-components'
import { color, fontSize, space, textAlign } from 'styled-system'
import { TextProps } from './TextProps'

const H2 = styled.h2<TextProps>`
  ${space};
  ${color};
  ${fontSize};
  ${textAlign};
  flex-wrap: wrap;
  font-family: ${(props) =>
    props.theme.fontFamily[props.fontWeight || 'normal']};
`

export default H2

H2.defaultProps = {
  fontSize: 5,
  color: 'text',
  fontWeight: 'normal',
}
