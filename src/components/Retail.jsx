import RetailTile from "../common/RetailTile";
import KegTile from "../common/KegTile";
import img1 from "../assets/Retail/retailbeer1.jpg";
import img2 from "../assets/Retail/retailwine2.jpg";
import img3 from "../assets/Retail/retailbeer2.jpg";
import beerpdf from "../assets/beerrunretailbeer.pdf";
import winepdf from "../assets/beerrunretailwine.pdf";

export default function Retail() {
  return (
    <div className=" z-0 min-h-screen flex flex-col md:flex-row md:place-content-center place-items-center  gap-10 lg:px-32 px-5  bg-backgroundColor   ">
      <RetailTile
        title="Beer"
        image={img1}
        description="Our beer is carefully selected to be the bee's knees of selection. More information about who does it and why it's done this way"
        link={beerpdf}
      />
      <RetailTile
        title="Wine"
        image={img2}
        description="Our wine is carefully selected to be the bee's knees of selection. More information about who does it and why it's done this way"
        link={winepdf}
      />
      <KegTile
        title="Kegs"
        image={img3}
        description="Did you know that you can order kegs? Keg Orders must be submitted by Thursday at noon for a weekend pickup."
      />
    </div>
  );
}
