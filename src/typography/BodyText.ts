import styled from 'styled-components'
import { color, fontSize, space, textAlign } from 'styled-system'
import { TextProps } from './props'

const BodyText = styled.p<TextProps>`
  ${space};
  ${color};
  ${fontSize};
  ${textAlign};
  flex-wrap: wrap;
  font-family: ${(props) =>
    props.theme.fontFamily[props.fontWeight || 'normal']};
`

export default BodyText

BodyText.defaultProps = {
  fontSize: 1,
  color: 'text',
  fontWeight: 'normal',
}
