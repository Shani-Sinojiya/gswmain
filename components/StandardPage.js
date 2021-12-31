import Link from "next/link";
import { useState } from "react";

export const standardApi = [
  {
    id: 1,
    price: "0",
    img: "/img/course1.jpg",
    link: "/standard/1",
    disc: "start learning, Standard 1 with all books and videos to you enjoy him.",
  },
  {
    id: 2,
    price: "0",
    img: "/img/course2.jpg",
    link: "/standard/2",
    disc: "start learning, Standard 2 with all books and videos to you enjoy him.",
  },
  {
    id: 3,
    price: "0",
    img: "/img/course3.svg",
    link: "/standard/3",
    disc: "start learning, Standard 3 with all books and videos to you enjoy him.",
  },
  {
    id: 4,
    price: "0",
    img: "/img/course4.svg",
    link: "/standard/4",
    disc: "start learning, Standard 4 with all books and videos to you enjoy him.",
  },
  {
    id: 5,
    price: "0",
    img: "/img/course5.svg",
    link: "/standard/5",
    disc: "start learning, Standard 5 with all books and videos to you enjoy him.",
  },
  {
    id: 6,
    price: "0",
    img: "/img/course6.svg",
    link: "/standard/6",
    disc: "start learning, Standard 6 with all books and videos to you enjoy him.",
  },
  {
    id: 7,
    price: "0",
    img: "/img/course7.svg",
    link: "/standard/7",
    disc: "start learning, Standard 7 with all books and videos to you enjoy him.",
  },
  {
    id: 8,
    price: "0",
    img: "/img/course8.svg",
    link: "/standard/8",
    disc: "start learning, Standard 8 with all books and videos to you enjoy him.",
  },
  {
    id: 9,
    price: "0",
    img: "/img/course9.svg",
    link: "/standard/9",
    disc: "start learning, Standard 9 with all books and videos to you enjoy him.",
  },
  {
    id: 10,
    price: "0",
    img: "/img/course10.svg",
    link: "/standard/10",
    disc: "start learning, Standard 10 with all books and videos to you enjoy him.",
  },
];

const StanDarD = () => {
  const [standarDdata, setstandarDdata] = useState(standardApi);
  function updatedata() {
    setstandarDdata(standarDdata);
  }
  return (
    <section className="course" id="course">
      <h1 className="heading">standards</h1>
      <CstanDarD data={standarDdata} onChange={updatedata} />
    </section>
  );
};

export const CstanDarD = ({ data }) => {
  return (
    <div className="box-container">
      {data.map((o) => {
        const { img, id, price, disc, link } = o;
        return (
          <div className="box" key={id}>
            <img src={img} alt="standard" />
            <h3 className="price">{price}&#x20B9;</h3>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
              </div>
              <Link href={link}>
                <a className="title">standard {id}</a>
              </Link>
              <p>{disc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StanDarD;
