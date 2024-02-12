/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import SectionCategory from "../components/Category/SectionCategory";
import { SectionProduct } from "../components/Product/SectionProduct";
const Products = () => {
  const { categoria } = useParams();

  return (
    <>
      <SectionCategory />
      <SectionProduct categoria={categoria} />
    </>
  );
};

export default Products;
