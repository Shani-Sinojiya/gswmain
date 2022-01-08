import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function NavBar() {
  const [NavToggle, setNavToggle] = useState(false);
  const router = useRouter();

  const toggleNavClick = () => {
    setNavToggle(!NavToggle);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setNavToggle(false);
    });
  }, []);

  return (
    <header>
      <div
        id="menu"
        className={NavToggle ? "fas fa-times" : "fas fa-bars"}
        onClick={toggleNavClick}
      ></div>
      <Link href="/">
        <a className="logo">
          <i className="fas fa-user-graduate"></i>Gujrati Study Web
        </a>
      </Link>
      <nav className={NavToggle ? "navbar nav-toggle" : "navbar"}>
        <ul>
          <li>
            <Link href="/">
              <a id="gsw_home" className={router.asPath == "/" ? "active" : ""}>
                home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a
                id="gsw_about"
                className={router.asPath == "/about" ? "active" : ""}
              >
                about
              </a>
            </Link>
          </li>
          <li>
            <Link href="/standard">
              <a
                id="gsw_course"
                className={router.asPath == "/standard" ? "active" : ""}
              >
                standard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                id="gsw_contact"
                className={router.asPath == "/contact" ? "active" : ""}
              >
                contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="ls-btn">
        <div id="login">
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
        <div id="signup">
          <Link href="/signup">
            <a>Signup</a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
