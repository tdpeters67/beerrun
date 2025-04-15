import MenuTile from "../common/MenuTile";
import beverageMenu from "../assets/beerRunMenus/beverageMenu.pdf";
import lunchMenu from "../assets/beerRunMenus/lunchMenu.pdf";
import dinnerMenu from "../assets/beerRunMenus/dinnerMenu.pdf";
import tacoMenu from "../assets/beerRunMenus/tacoMenu.pdf";
import brunchMenu from "../assets/beerRunMenus/brunchMenu.pdf";

export default function Menus() {
  return (
    <div
      className=" h-[90vh] md:h-screen flex flex-col place-content-center gap-12 items-center font-Lato lg:px-32 px-5 bg-backgroundColor justify-items-center min-h-min py-10
 "
    >
      <h1 className="content-center place-self-center text-4xl font-semibold ">
        Menus
      </h1>
      <div className="  flex flex-col gap-10">
        <MenuTile title="Lunch" src={lunchMenu} />
        <MenuTile title="Dinner" src={dinnerMenu} />
        <MenuTile title="Beer" src="https://untappd.com/v/beer-run/14799" />
        <MenuTile title="Wine & Cocktails" src={beverageMenu} />
        <MenuTile title="Breakfast Tacos" src={tacoMenu} />
        <MenuTile title="Brunch" src={brunchMenu} />
      </div>
    </div>
  );
}
