import MenuTile from "../common/MenuTile";

export default function Menus() {
  return (
    <div className=" h-[90vh] md:h-screen flex flex-col place-content-center gap-12 items-center font-Lato lg:px-32 px-5 bg-backgroundColor justify-items-center ">
      <h1 className="content-center place-self-center text-4xl font-semibold ">
        Menus
      </h1>
      <div className="  flex flex-col gap-10">
        <MenuTile title="Lunch" />
        <MenuTile title="Dinner" />
        <MenuTile title="Beer" />
        <MenuTile title="Wine & Cocktails" />
        <MenuTile title="Breakfast Tacos" />
        <MenuTile title="Brunch" />
      </div>
    </div>
  );
}
