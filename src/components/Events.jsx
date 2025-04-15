// import EventForm from "../common/EventForm";
// import { useState } from "react";
import CateringTile from "../common/CateringTile";
import img1 from "../assets/events1.jpg";
import img2 from "../assets/catering1.jpg";

export default function Events() {
  // const [eventForm, setEventForm] = useState(false);

  // function handleChange() {
  //   setEventForm(!eventForm);
  // }

  return (
    <div className="z-0 min-h-screen flex flex-col md:flex-row md:place-content-center place-items-center  gap-10 lg:px-32 px-5 py-32 bg-backgroundColor ">
      <CateringTile
        title="Events"
        image={img1}
        description="Looking to host an office happy hour or a sports night with friends? Please contact Joanne at events@beerrun.com for all inquiries and questions!"
      />
      <CateringTile
        title="Catering"
        image={img2}
        description="Organizing a fundraiser or need catering for your team? Please contact Joanne at events@beerrun.com for all inquiries and questions!"
      />
    </div>
  );
}
