import MainHead from "../components/MainHead";
import NavBar from "../components/GswNavBar";
import Head from "next/head";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const about = () => {
  return (
    <>
      <Head>
        <title>About | Gujrati Study Web</title>
      </Head>
      <MainHead />
      <NavBar />
      <AboutUs />
      <Footer />
    </>
  );
};

export default about;
