import '@/styles/global.css'
import "bootstrap/dist/css/bootstrap.css"
import type { AppProps } from 'next/app'
import { NextPageWithLayout } from './page'

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    getLayout(<Component {...pageProps}  />)
  )
};

export default MyApp;