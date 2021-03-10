import styled from 'styled-components'
import { color, fontSize, space, textAlign } from 'styled-system'
import { TextProps } from './TextProps'

const H4 = styled.h4<TextProps>`
  ${space};
  ${color};
  ${fontSize};
  ${textAlign};
  flex-wrap: wrap;
  font-family: ${(props) =>
    props.theme.fontFamily[props.fontWeight || 'normal']};
`

export default H4

H4.defaultProps = {
  fontSize: 3,
  color: 'text',
  fontWeight: 'normal',
}
