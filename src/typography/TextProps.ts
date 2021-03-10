import {
  ColorProps,
  FontSizeProps,
  SpaceProps,
  TextAlignProps,
} from 'styled-system'

export type TextProps = SpaceProps &
  ColorProps &
  TextAlignProps &
  FontSizeProps & {
    color?: string
    fontWeight?: 'lighter' | 'normal' | 'bold'
  }
