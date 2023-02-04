// // https://next-auth.js.org/getting-started/example


import { SessionProvider } from "next-auth/react";

// import '../styles/globals.css'
// import type { AppProps } from 'next/app'
// import { SessionProvider } from 'next-auth/react'

// function MyApp({ 
//   Component, 
//   pageProps: { session, ...pageProps }
//  }: AppProps) {
//   return(
//     <SessionProvider session={pageProps.session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }

// export default MyApp

import { useSession } from 'next-auth/react'
import '../styles/globals.css'
function MyApp( { Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp;