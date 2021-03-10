import styled from 'styled-components'
import { color, fontSize, space, textAlign } from 'styled-system'
import { TextProps } from './TextProps'

const SmallText = styled.p<TextProps>`
  ${space};
  ${color};
  ${fontSize};
  ${textAlign};
  flex-wrap: wrap;
  font-family: ${(props) =>
    props.theme.fontFamily[props.fontWeight || 'normal']};
`

export default SmallText

SmallText.defaultProps = {
  fontSize: 0,
  color: 'text',
  fontWeight: 'normal',
}
