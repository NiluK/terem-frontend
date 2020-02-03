import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../../config/theme';

const GlobalStyle = createGlobalStyle`
  body {
    background: #ECEFF4;
    font-family: sans-serif;
  }
`;

export default class NextApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          />
          <title>Location, Location, Location</title>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
