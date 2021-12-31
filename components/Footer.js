import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="box-container">
        <div className="box">
          <h3>branch locations</h3>
          <Link href="/">
            <a>India</a>
          </Link>
          <Link href="/">
            <a>USA</a>
          </Link>
          <Link href="/">
            <a>france</a>
          </Link>
          <Link href="/">
            <a>russia</a>
          </Link>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <Link href="/">
            <a>home</a>
          </Link>
          <Link href="/about">
            <a>about</a>
          </Link>
          <Link href="/standard">
            <a>standard</a>
          </Link>{" "}
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> mumbai, india 400104.
          </p>
          <p>
            <i className="fas fa-envelope"></i> gsw@gujratistudyweb.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +91 63539 40369
          </p>
        </div>
      </div>
      <h1 className="credit">
        created by
        <Link href="/">
          <a>gujrati study web</a>
        </Link>
        all rights reserved.
      </h1>
    </div>
  );
};

export default Footer;
