import styled from 'styled-components'
import { color, fontSize, space, textAlign } from 'styled-system'
import { TextProps } from './props'

const H1 = styled.h1<TextProps>`
  ${space};
  ${color};
  ${fontSize};
  ${textAlign};
  flex-wrap: wrap;
  font-family: ${(props) =>
    props.theme.fontFamily[props.fontWeight || 'normal']};
`

export default H1

H1.defaultProps = {
  fontSize: 6,
  color: 'text',
  fontWeight: 'normal',
}
