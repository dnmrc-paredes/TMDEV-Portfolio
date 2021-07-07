import { AppProps } from 'next/app'

// Components
import { Header } from '../components/header/header'

// Global Styles
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
