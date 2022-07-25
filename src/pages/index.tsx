import type { ReactElement } from 'react'
import Layout from '@/templates/layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/components/theme'
import { createGlobalStyle } from 'styled-components'
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", sans-serif;
    ${reset};
    margin: 0;
  }
`;

export default function Page() {
  return (
    <></>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Layout/>
    </ThemeProvider>
  )
}
