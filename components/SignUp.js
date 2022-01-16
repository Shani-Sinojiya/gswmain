import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  const [loding, setLoding] = useState(false);
  const [Data, setData] = useState({
    userName: "",
    email: "",
    mobileNo: "",
    password: "",
    re_pass: "",
  });
  const mainStyle = {
    background: "#f8f8f8",
    padding: "33px 0",
    marginBottom: "0",
  };
  function HendleChange(e) {
    let value = e.target.value;
    setData({
      ...Data,
      [e.target.name]: value,
    });
  }
  const hemdleSubmit = async (e) => {
    e.preventDefault();
    if (Data.re_pass === Data.password) {
      setLoding(true);
      let data = JSON.stringify({
        userName: Data.userName,
        email: Data.email,
        password: Data.password,
        mobileNo: Data.mobileNo,
      });
      let headersList = {
        "Content-Type": "application/json",
      };
      let reqOptions = {
        url: "https://gswbackend.herokuapp.com/api/auth/register",
        method: "POST",
        headers: headersList,
        data: data,
      };
      const api = await axios(reqOptions);
      if (api.status === 201) {
        setLoding(false);
        window.alert("sign up successfully");
        router.push("/login");
      } else {
        setLoding(false);
        if (api.status === 400) {
          window.alert("pls fill a valid inputs");
        }
      }
    } else {
      window.alert("password are not match");
    }
  };
  return (
    <main className="signup" style={mainStyle}>
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form
              onSubmit={(e) => hemdleSubmit(e)}
              className="register-form"
              id="register-form"
            >
              <div className="form-group">
                <label htmlFor="name">
                  <i className="mdi mdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="userName"
                  id="name"
                  minLength="5"
                  placeholder="Username"
                  value={Data.userName}
                  onChange={HendleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <i className="mdi mdi-email material-icons-name"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  value={Data.email}
                  onChange={HendleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobileNo">
                  <i className="mdi mdi-phone material-icons-name"></i>
                </label>
                <input
                  type="tel"
                  name="mobileNo"
                  id="mobileNo"
                  minLength="10"
                  maxLength="10"
                  placeholder="Mobile Number"
                  value={Data.mobileNo}
                  onChange={HendleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass">
                  <i className="mdi mdi-lock material-icons-name"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  minLength="8"
                  id="pass"
                  placeholder="Password"
                  value={Data.password}
                  onChange={HendleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="re-pass">
                  <i className="mdi mdi-lock-outline material-icons-name"></i>
                </label>
                <input
                  type="password"
                  name="re_pass"
                  id="re_pass"
                  placeholder="Repeat your password"
                  value={Data.re_pass}
                  onChange={HendleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="agree-term"
                  id="agree-term"
                  className="agree-term"
                  required={true}
                />
                <label htmlFor="agree-term" className="label-agree-term">
                  <span>
                    <span></span>
                  </span>
                  I agree all statements in
                  <Link href="/">
                    <a className="term-service">Terms of service</a>
                  </Link>
                </label>
              </div>
              <div className="form-group form-button">
                <button type="submit" className="form-submit" id="signup">
                  Register
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
          <div className="signup-image">
            <figure>
              <img src="/img/signup-image.jpg" alt="sign up" />
            </figure>
            <Link href="/login">
              <a className="signup-image-link">I am already account</a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
