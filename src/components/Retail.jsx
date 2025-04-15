import RetailTile from "../common/RetailTile";
import KegTile from "../common/KegTile";
import img1 from "../assets/Retail/retailbeer1.jpg";
import img2 from "../assets/Retail/retailwine2.jpg";
import img3 from "../assets/Retail/retailbeer2.jpg";
import beerpdf from "../assets/beerrunretailbeer.pdf";
import winepdf from "../assets/beerrunretailwine.pdf";

export default function Retail() {
  return (
    <div className=" z-0 min-h-screen flex flex-col md:flex-row md:place-content-center place-items-center  gap-10 lg:px-32 px-5  bg-gray-800  py-32 ">
      <RetailTile
        title="Beer"
        image={img1}
        description="Our beer selection is curated by our passionate team dedicated to offering an exceptional array of flavors and styles. We strive to bring you a balance of well-loved classics with innovative new offerings"
        link={beerpdf}
      />
      <RetailTile
        title="Wine"
        image={img2}
        description="With an emphasis on showcasing organic wines, our wine room features an extensive selection of curated regional and international varieties, offering a distinguished collection for every palate."
        link={winepdf}
      />
      <KegTile
        title="Kegs"
        image={img3}
        description="Keg orders for a Friday-Monday pickup must be submitted by Thursday at 2pm. Orders for a Tuesday-Thursday pickup must be submitted by Monday at 2pm.
"
      />
    </div>
  );
}
