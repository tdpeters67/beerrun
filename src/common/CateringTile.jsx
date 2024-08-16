export default function CateringTile({ title, image, description }) {
  return (
    <div
      className="w-[300px] md:w-[400px] md:h-fit  overflow-hidden [box-shadow:0px_0px_15px_-5px]  hover:[box-shadow:0px_0px_15px_0px] bg-white mb-5
  
  "
    >
      <div className="image-container ">
        <img className="h-72 object-cover" src={image} alt={title} />
      </div>
      <div className="m-4 mt-[.5rem]">
        <div className="mb-2">
          <h3 className="m-0 p-0 font-bold ">{title}</h3>
        </div>
        <div className="description">
          <p className="m-0 p-0">{description}</p>
        </div>
      </div>
    </div>
  );
}
