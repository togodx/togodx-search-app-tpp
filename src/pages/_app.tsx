import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import NextNprogress from 'nextjs-progressbar'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

const GlobalStyle = createGlobalStyle`
  font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", sans-serif;
  ${reset}
`

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <GlobalStyle />
      <NextNprogress options={{ speed: 500, showSpinner: false }} />
      <Component {...pageProps} />
    </>
  )
}