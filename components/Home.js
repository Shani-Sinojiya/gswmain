import Link from "next/link";

const Home = () => {
  const home_style = { backgroundImage: 'url("/img/home-bg.jpg")' };
  const shape_style = { backgroundImage: 'url("/img/shape.png")' };

  return (
    <section className="home" id="home" style={home_style}>
      <h1>education from home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum neque
        aliquid similique error velit placeat vitae accusantium est nam magnam?
      </p>
      <Link href="/standard">
        <a>
          <button className="btn">get started</button>
        </a>
      </Link>
      <div className="shape" style={shape_style}></div>
    </section>
  );
};

export default Home;
