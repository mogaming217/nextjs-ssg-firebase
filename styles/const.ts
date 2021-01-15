const FONT = {
  XXXLARGE: 32,
  XXLARGE: 24,
  XLARGE: 22,
  LARGE: 20,
  MEDIUM: 18,
  BASE: 16,
  SMALL: 12,
  XSMALL: 10,
  TINY: 8,
} as const

const FONT_WEIGHT = {
  NORMAL: 400,
  BOLD: 600,
} as const

const COLOR = {
  PRIMARY: '#348ceb',
  LABEL: '#2b2b2b',
  PLACEHOLDER: '#c9c9c9',
} as const

const WIDTH = {
  CONTENT_MAX: 768,
} as const

const HEIGHT = {
  HEADER: 44,
} as const

export const StyleConst = {
  FONT,
  FONT_WEIGHT,
  COLOR,
  WIDTH,
  HEIGHT,
}
