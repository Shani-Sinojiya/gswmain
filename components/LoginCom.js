import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

const LogIn = () => {
  const mainStyle = { background: "#f8f8f8", padding: "33px 0" };
  const [Data, setData] = useState({
    email: "",
    password: "",
  });
  const [loding, setLoding] = useState(false);
  const router = useRouter();
  const hendleChenge = (e) => {
    let value = e.target.value;
    setData({
      ...Data,
      [e.target.name]: value,
    });
  };

  const hendleSubmit = async (e) => {
    e.preventDefault();
    setLoding(true);
    let data = JSON.stringify({
      email: Data.email,
      password: Data.password,
    });
    let headersList = {
      "Content-Type": "application/json",
    };
    let reqOptions = {
      url: "https://gswbackend.herokuapp.com/api/auth/login",
      method: "POST",
      headers: headersList,
      data: data,
    };
    const api = await axios(reqOptions);
    if (api.status === 200) {
      setLoding(false);
      const { tokan } = api.data;
      window.alert("Login Successfully");
      router.push("/");
    } else {
      setLoding(false);
      window.alert("invalid data");
    }
  };
  return (
    <main className="sign-in" style={mainStyle}>
      <div className="container">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src="/img/signin-image.jpg" alt="login" />
            </figure>
            <Link href="/signup">
              <a className="signup-image-link">Create an account</a>
            </Link>
          </div>
          <div className="signin-form">
            <h2 className="form-title">Log in</h2>
            <form
              onSubmit={hendleSubmit}
              className="register-form"
              id="login-form"
            >
              <div className="form-group">
                <label htmlFor="email">
                  <i className="mdi mdi-email material-icons-name"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  onChange={hendleChenge}
                  value={Data.email}
                  required={true}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <i className="mdi mdi-lock material-icons-name"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={hendleChenge}
                  value={Data.password}
                  required={true}
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="agree-term"
                />
                <label htmlFor="remember-me" className="label-agree-term">
                  <span>
                    <span></span>
                  </span>
                  Remember me
                </label>
              </div>
              <div className="form-group form-button">
                <button type="submit" className="form-submit" id="signin">
                  Log in
                </button>
                {loding && (
                  <img
                    src="/img/Spinner.svg"
                    alt="loding"
                    width="50px"
                    style={{ position: "absolute", bottom: 0 }}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogIn;
