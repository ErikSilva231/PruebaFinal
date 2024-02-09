import { CardDetail } from "../components/Details/CardDetail";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  return (
    <>
      <CardDetail id={id} />
    </>
  );
}

export default ProductDetail;
