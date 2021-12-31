import MainHead from "../components/MainHead";
import NavBar from "../components/GswNavBar";
import Head from "next/head";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Gujrati Study Web</title>
      </Head>
      <MainHead />
      <NavBar />
      <ContactUs />
      <Footer />
    </>
  );
};

export default contact;
