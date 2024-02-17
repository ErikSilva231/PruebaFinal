/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import SectionCategory from "../components/Category/SectionCategory";
import { SectionProduct } from "../components/Product/SectionProduct";
import { category } from "../config/const";
const Products = () => {
  const { categoria } = useParams();
  const { name } = category.find(
    (cat) => cat.path === `/products/${categoria}`
  );

  return (
    <>
      <SectionCategory />
      <SectionProduct categoria={name} />
    </>
  );
};

export default Products;
