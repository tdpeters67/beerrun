import { useState } from "react";
import KegForm from "./KegForm";

export default function RetailTile({ title, image, description }) {
  const [kegForm, setKegForm] = useState(false);

  function handleChange() {
    !kegForm ? setKegForm(true) : setKegForm(false);
  }
  return (
    <div
      className="w-[400px] h-fit  overflow-hidden [box-shadow:0px_0px_15px_-5px]  hover:[box-shadow:0px_0px_15px_0px] bg-white mb-5

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
      <div className="flex flex-col justify-center">
        <button
          className="p-2 mb-2 bg-white border-[none] [transition:.2s] hover:to-backgroundColor "
          onClick={handleChange}
        >
          {kegForm ? <p /> : <p>Submit an Order</p>}
        </button>
        {kegForm ? <KegForm handleChange={handleChange} /> : <p></p>}
      </div>
    </div>
  );
}
