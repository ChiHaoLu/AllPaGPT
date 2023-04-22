// @refresh reload
import { Suspense } from "solid-js"
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts
} from "solid-start"
import "@unocss/reset/tailwind.css"
import "~/styles/main.css"
import "uno.css"
import "katex/dist/katex.min.css"
import "highlight.js/styles/atom-one-dark.css"
import PrefixTitle from "./components/PrefixTitle"
import { useRegisterSW } from "virtual:pwa-register/solid"
// @ts-ignore
import { pwaInfo } from "virtual:pwa-info"

export default function Root() {
  useRegisterSW({ immediate: true })
  return (
    <Html lang="zh-cn">
      <Head>
        <PrefixTitle />
        <Meta charset="utf-8" />
        <link rel="icon" href="./favicon.ico" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        {pwaInfo?.webManifest?.href ? (
          <Link rel="manifest" href={pwaInfo.webManifest.href} />
        ) : (
          ""
        )}
        <Meta name="theme-color" content="#f6f8fa" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
