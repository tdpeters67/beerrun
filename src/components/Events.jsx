import EventForm from "../common/EventForm";
import { useState } from "react";
import CateringTile from "../common/CateringTile";
import img1 from "../assets/events1.jpg";
import img2 from "../assets/catering1.jpg";

export default function Events() {
  const [eventForm, setEventForm] = useState(false);

  function handleChange() {
    !eventForm ? setEventForm(true) : setEventForm(false);
  }
  //   function closeForm() {
  //     setEventForm(false);
  //   }

  return (
    <div className=" z-0 min-h-screen flex flex-col md:flex-row md:place-content-center place-items-center  gap-10 lg:px-32 px-5  bg-backgroundColor   ">
      <CateringTile
        title="Events"
        image={img1}
        description="Want to bring your office out for a group bonding happy hour? Or maybe you just want a place for your boys to get together and watch a sportsball game?  Email J or fill out a form to do this!"
      />
      <CateringTile
        title="Catering"
        image={img2}
        description="Have a big fundraiser coming up? Is everyone tired of the same old lunch day after day? Well we can bring good food to you! Inquire about this stuff sometime with J at this email or something."
      />
    </div>
  );
}
