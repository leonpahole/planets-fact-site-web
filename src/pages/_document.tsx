import { antonio, leagueSpartan } from "@/fonts";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`font-sans ${antonio.variable} ${leagueSpartan.variable}`}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
