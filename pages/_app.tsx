import { Footer, Header } from 'components/lv2'
import { DefaultSeo } from 'components/seo'
import { AuthProvider } from 'hooks/useAuth'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import { StyleConst } from 'styles/const'
import { GlobalStyle } from 'styles/global'

const AppContainer = styled.div`
  position: relative;
  padding: ${StyleConst.HEIGHT.HEADER}px 16px 32px;
  margin: 0 auto;
  max-width: ${StyleConst.WIDTH.CONTENT_MAX}px;
  min-height: 100vh;
`

const Provider = ({ children }: { children: React.ReactNode }) => <AuthProvider>{children}</AuthProvider>

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0" />
      </Head>
      <DefaultSeo />

      <Header />

      <GlobalStyle />

      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>

      <Footer />
    </Provider>
  )
}

export default App
