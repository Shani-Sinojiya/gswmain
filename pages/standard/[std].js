import MainHead from "../../components/MainHead";
import NavBar from "../../components/GswNavBar";
import Head from "next/head";
import Footer from "../../components/Footer";
import axios from "axios";

const std = ({ data }) => {
  const { img, id, price, disc } = data;
  return (
    <>
      <Head>
        <title>Standard {id} | Gujrati Study Web</title>
      </Head>
      <MainHead />
      <NavBar />
      <section className="course" id="course">
        <h1 className="heading">standard {id}</h1>
        <div className="box-container">
          <div className="box">
            <img src={img} alt="standard" />
            <h3 className="price">{price} &#x20B9;</h3>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
              <p>{disc}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default std;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { std: "1" } },
      { params: { std: "2" } },
      { params: { std: "3" } },
      { params: { std: "4" } },
      { params: { std: "5" } },
      { params: { std: "6" } },
      { params: { std: "7" } },
      { params: { std: "8" } },
      { params: { std: "9" } },
      { params: { std: "10" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { std } = params;
  let info = await axios.get(
    `https://my-json-server.typicode.com/Shani-Sinojiya/GSWStandardsApi/std/${std}`
  );

  return {
    props: {
      data: info.data,
    },
  };
}
