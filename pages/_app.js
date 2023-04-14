import '@/styles/globals.css'
import {Provider} from 'react-redux';
import Navbar from '@/component/navbar/navbar';
import Footer from '@/component/Footer/Footer';
import store from '../Redux/store';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <Navbar/> */}
    <Component {...pageProps} />
    <Footer/>
  </Provider>
  );
}
