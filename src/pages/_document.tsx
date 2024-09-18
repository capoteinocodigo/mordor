import React from 'react'

import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="icon" href="/favicon.svg" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <meta
            name="title"
            content="Mordor | Na Mordor criamos marcas icônicas para clientes únicos"
          />
          <meta
            name="description"
            content="A Mordor é um estúdio de branding e experiência de marca. O que isso
            significa? Aqui, criamos não apenas sua marca, mas todo o universo visual e
            textual para que nossos clientes tenham a melhor experiência possível
            com a sua empresa através da sua marca."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mordor.com" />
          <meta
            property="og:title"
            content="Mordor | Na Mordor criamos marcas icônicas para clientes únicos"
          />
          <meta
            property="og:description"
            content="A Mordor é um estúdio de branding e experiência de marca. O que isso
            significa? Aqui, criamos não apenas sua marca, mas todo o universo visual e
            textual para que nossos clientes tenham a melhor experiência possível
            com a sua empresa através da sua marca."
          />
          {/* <meta property="og:image" content="/ogimage.png" /> */}

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://mordor.com" />
          <meta
            property="twitter:title"
            content="Mordor | Na Mordor criamos marcas icônicas para clientes únicos"
          />
          <meta
            property="twitter:description"
            content="A Mordor é um estúdio de branding e experiência de marca. O que isso
            significa? Aqui, criamos não apenas sua marca, mas todo o universo visual e
            textual para que nossos clientes tenham a melhor experiência possível
            com a sua empresa através da sua marca."
          />
          {/* <meta property="twitter:image" content="/ogimage.png" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
