import styled from 'styled-components'
import { color, fontSize, space, textAlign } from 'styled-system'
import { TextProps } from './TextProps'

const H5 = styled.h5<TextProps>`
  ${space};
  ${color};
  ${fontSize};
  ${textAlign};
  flex-wrap: wrap;
  font-family: ${(props) =>
    props.theme.fontFamily[props.fontWeight || 'normal']};
`

export default H5

H5.defaultProps = {
  fontSize: 2,
  color: 'text',
  fontWeight: 'normal',
}
