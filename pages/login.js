import Head from "next/head";
import LoginCom from "../components/LoginCom";
import LoginSignupHead from "../components/loginsignupHead";

const login = () => {
  return (
    <>
      <Head>
        <title>Log In | Gujrati Study Web</title>
      </Head>
      <LoginSignupHead />
      <LoginCom />
    </>
  );
};

export default login;
