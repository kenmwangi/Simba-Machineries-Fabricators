import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Banner />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
