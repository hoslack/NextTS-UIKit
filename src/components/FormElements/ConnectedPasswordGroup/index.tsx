import { useField } from 'formik'
import * as React from 'react'
import styled from 'styled-components'
import {
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
  borderWidth,
  BorderWidthProps,
  color,
  ColorProps,
  space,
  SpaceProps,
} from 'styled-system'

export type StyledInputProps = SpaceProps &
  ColorProps &
  BorderWidthProps &
  BorderColorProps &
  BorderRadiusProps

export const StyledInput = styled.input<StyledInputProps>`
  ${space};
  ${color};
  ${borderWidth};
  ${borderColor};
  ${borderRadius};
  height: 100%;
`

StyledInput.defaultProps = {
  color: 'text',
  borderWidth: 1,
  bg: 'background',
  borderColor: 'muted',
}

type ConnectedPasswordGroupProps = {
  label: string
  name: string
}

const ConnectedPasswordGroup: React.FC<ConnectedPasswordGroupProps> = ({
  label,
  name,
}) => {
  const [field, meta] = useField(name)

  return <div>{label}</div>
}

export default ConnectedPasswordGroup
