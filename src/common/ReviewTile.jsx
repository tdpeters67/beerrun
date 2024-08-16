export default function ReviewTile({ img, name }) {
  return (
    <div className="w-full md:w-1.3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow=[rgba(0,0,0,0.24)_0px_3px_8px]">
      <div>
        <p className="text-lightText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        <img src={img} alt="review" className="rounded-full w-1/4" />
        <h3 className="font-semibold">{name}</h3>
      </div>
    </div>
  );
}
