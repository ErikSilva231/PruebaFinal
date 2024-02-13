
import SectionCategory from "../components/Category/SectionCategory";
import CTA from "../components/Footer/CTA";
import Slider from "../components/Header/Slider";
import { SectionProduct } from "../components/Product/SectionProduct";
function Home() {
  return (
    <>
      <Slider />
      <SectionCategory />
      <SectionProduct />
      <CTA />
    </>
  );
}

export default Home;
