import styled from 'styled-components'
import { color, fontSize, space, textAlign } from 'styled-system'
import { TextProps } from './TextProps'

const H3 = styled.h3<TextProps>`
  ${space};
  ${color};
  ${fontSize};
  ${textAlign};
  flex-wrap: wrap;
  font-family: ${(props) =>
    props.theme.fontFamily[props.fontWeight || 'normal']};
`

export default H3

H3.defaultProps = {
  fontSize: 4,
  color: 'text',
  fontWeight: 'normal',
}
