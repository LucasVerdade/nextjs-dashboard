import '@/styles/global.css'
import "bootstrap/dist/css/bootstrap.css"
import { AuthProvider } from 'contexts/AuthContext';
import type { AppProps } from 'next/app'
import { NextPageWithLayout } from './page'

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <AuthProvider>
      {getLayout(<Component {...pageProps}  />)}
    </AuthProvider>
  )
};

export default MyApp;