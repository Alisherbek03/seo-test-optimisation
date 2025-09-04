import { Helmet } from "react-helmet-async";

export const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="Shop our latest products now." />
        <link rel="canonical" href="/shop" />
      </Helmet>
      <h1>Shop</h1>
    </>
  );
};
