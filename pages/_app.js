import '../styles/globals.css'
import '@fontsource/open-sans';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/300.css';
import '@fontsource/source-sans-pro';
import '@fontsource/source-sans-pro/600.css';
import NProgress from 'nprogress';
import Router from "next/router";
import Footer from '../components/ui/Footer';


Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return <div className="overflow-hidden">
    <Component {...pageProps} />
    <Footer/>
  </div>
}

export default MyApp
