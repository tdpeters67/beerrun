import Image from "../common/Image.jsx";
export default function ImageSplash({ library }) {
  return (
    <div className=" min-h-screen group flex max-md:flex-col justify-center gap-2 bg-black   ">
      {library.map((item) => (
        <div
          key={item.title}
          className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:transition-all focus-within:ring focus-within:ring-indigo-300 "
        >
          <Image src={item.src} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
