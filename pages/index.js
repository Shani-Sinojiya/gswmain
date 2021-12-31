import MainHead from "../components/MainHead";
import NavBar from "../components/GswNavBar";
import Home from "../components/Home";
import Head from "next/head";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import StanDarD from "../components/StandardPage";

function IndexHome() {
  return (
    <>
      <Head>
        <title>Home | Gujrati Study Web</title>
      </Head>
      <MainHead />
      <NavBar />
      <Home />
      <AboutUs />
      <StanDarD />
      <ContactUs />
      <Footer />
    </>
  );
}
export default IndexHome;
