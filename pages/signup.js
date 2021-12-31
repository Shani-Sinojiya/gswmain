import Head from "next/head";
import SignUp from "../components/SignUp";
import LoginSignupHead from "../components/loginsignupHead";

const signup = () => {
  return (
    <>
      <Head>
        <title>Sign Up | Gujrati Study Web</title>
      </Head>
      <LoginSignupHead />
      <SignUp />
    </>
  );
};

export default signup;
