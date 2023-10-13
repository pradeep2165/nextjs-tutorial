import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/layout.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps}/>)
  }
  return <>
  <Head>
  <title>next js</title>
  <meta name="description" content="web development"/>
</Head>
  <Header/><Component {...pageProps} /><Footer/></>
}

export default MyApp
