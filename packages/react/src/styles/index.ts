import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  space,
  radii,
  lineHeights,
} from '@lpatestorg/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    space,
    radii,
    lineHeights,
  },
})
