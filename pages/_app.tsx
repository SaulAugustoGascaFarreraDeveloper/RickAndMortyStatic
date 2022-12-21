import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import {DarkTheme} from '../themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
  
    <NextUIProvider theme={DarkTheme}>
        <Component {...pageProps} />
    </NextUIProvider>
    
  )
}
