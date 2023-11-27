import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>Frutero Club</title>
        <meta
          name="description"
          content="Community-built web app for builders and creators in LatAm"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/icons/mask-icon.svg" color="#0D041E" />
        <meta name="theme-color" content="#0D041E" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/icons/icon-512x512.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="msapplication-TileColor" content="#0D041E" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
