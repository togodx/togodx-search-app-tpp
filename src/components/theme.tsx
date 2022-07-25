import 'styled-components'

export const theme = {
  colors: {
    // green
    $green01: '#8DCCA4',
    $green02: '#5F9873',
    $green03: '#EAF2ED',
    $green04: '#297C46',
    $green05: '#DEEBE3',
    $green06: '#34A9B9',

    // gray
    $gray01: '#707070',
    $gray02: '#FAFAFA',
    $gray03: '#C6C6C6',
    $gray04: '#5A5A5A',
    $gray05: '#D5D5D5',
    $gray06: '#8E8E8E',

    // other
    $white: '#ffffff',
    $black: '#000000',
  }
} as const

type AppTheme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme { }
}
