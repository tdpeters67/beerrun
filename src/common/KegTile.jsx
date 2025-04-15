import { useState } from "react";
import KegForm from "./KegForm";
import kegMenu from "../assets/beerRunMenus/beerRunKegs.pdf";

export default function KegTile({ title, image, description, link }) {
  const [kegForm, setKegForm] = useState(false);

  function handleChange() {
    setKegForm(!kegForm);
  }

  return (
    <div className="w-[300px] md:w-[400px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden ">
      <div className="relative">
        <img className="h-72 w-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">
          {description}
          <a
            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            href={kegMenu}
          >
            {" "}
            Click here for a list of available kegs.
          </a>
        </p>
        <div className="flex flex-col items-center">
          {link && (
            <a
              href={link}
              target="_blank"
              className="mb-2 inline-block px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-green-600 transition-colors"
            >
              See Our Current Selection
            </a>
          )}
          <button
            className="px-4 py-2 bg-backgroundColor text-white rounded-lg shadow hover:bg-brightColor transition-colors"
            onClick={handleChange}
          >
            {kegForm ? "Close Order Form" : "Submit an Order"}
          </button>
          {kegForm && <KegForm handleChange={handleChange} />}
        </div>
      </div>
    </div>
  );
}
