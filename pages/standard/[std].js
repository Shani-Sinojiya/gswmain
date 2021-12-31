import MainHead from "../../components/MainHead";
import NavBar from "../../components/GswNavBar";
import Head from "next/head";
import Footer from "../../components/Footer";
import StanDarD from "../../components/StandardPage";

const std = () => {
  return (
    <>
      <Head>
        <title>Standard | Gujrati Study Web</title>
      </Head>
      <MainHead />
      <NavBar />
      <StanDarD />
      <Footer />
    </>
  );
};

export default std;
