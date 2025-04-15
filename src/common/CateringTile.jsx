export default function CateringTile({ title, image, description }) {
  return (
    <div
      className="w-[300px] md:w-[400px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden
  "
    >
      <div className="relative ">
        <img className="h-72 w-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-4">
        <div className="mb-2">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
        </div>
        <div className="text-gray-700 mb-4">
          <p className="text-gray-700 mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
}
