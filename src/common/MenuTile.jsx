export default function MenuTile({ title }) {
  return (
    <div>
      <button className=" px-10 md:px-20 py-1 border-2 border-black text-xl md:text-4xl  flex justify-center container mx-auto	 text-white hover:bg-brightColor hover:text-white transition-all  whitespace-nowrap	">
        {title}
      </button>
    </div>
  );
}
