export default function RetailTile({ title, image, description, link }) {
  return (
    <div className="w-[300px] md:w-[400px]  bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative">
        <img className="h-72 w-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-center">
          <a
            href={link}
            target="_blank"
            className="inline-block px-4 py-2 bg-backgroundColor hover:bg-brightColor text-white rounded-lg shadow hover:bg-gray-00 transition-colors"
          >
            See Our Current Selection
          </a>
        </div>
      </div>
    </div>
  );
}
