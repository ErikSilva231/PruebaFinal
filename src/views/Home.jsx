
import SectionCategory from "../components/Category/SectionCategory";
import Slider from "../components/Header/Slider";
import { SectionProduct } from "../components/Product/SectionProduct";
function Home() {
  return (
    <>
      <Slider />
      <SectionCategory />
      <SectionProduct />
    </>
  );
}

export default Home;
