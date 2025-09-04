import { Helmet } from "react-helmet-async";

export const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login to view your account." />
        <link rel="canonical" href="/shop" />
      </Helmet>
      <h1>Login</h1>
    </>
  );
};
