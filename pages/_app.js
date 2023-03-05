import { Layout } from '@/src/components/layout/main'
import '@/styles/globals.css'
import '@/styles/main.sass'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
