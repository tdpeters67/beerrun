import beerrun1 from "../assets/beerrun1.jpg";
import chef from "../assets/chef.jpg";
import maryann from "../assets/maryann.avif";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-800 text-white  py-20 px-6">
      <div className="container  flex flex-col lg:flex-row justify-center items-center  gap-5 px-5 lg:px-32">
        <img
          className="w-full lg:w-1/2 rounded-xl shadow-lg"
          src={beerrun1}
          alt="Beer Run"
        />
        <div className="space-y-6 lg:pl-10">
          <h1 className="text-4xl font-bold text-center lg:text-left text-white">
            17 Years of Excellence
          </h1>
          <p className="text-lg leading-relaxed text-white">
            Beer Run is the quintessential downtown Charlottesville family
            restaurant. Founded in 2007, it has grown into one of America&apos;s
            top 100 beer bars. With a focus on locally sourced, seasonal
            ingredients, Beer Run is more than just a craft beer store—it&apos;s
            a community hub for food lovers and beer enthusiasts alike.
          </p>
        </div>
      </div>

      <div className="container mx-auto  flex  flex-col-reverse lg:flex-row justify-center items-center py-4 gap-10 mt-16 px-5 lg:px-32">
        <div className="space-y-6 lg:pr-10">
          <h1 className="text-4xl font-bold text-center lg:text-left text-white">
            Chef Laura Fonner
          </h1>
          <p className="text-lg leading-relaxed text-white">
            Chef Laura Fonner stands as a culinary beacon in Charlottesville,
            renowned for her dynamic career and unwavering commitment to the
            local community. After a culinary journey spanning over two decades,
            she has now joined the ranks here at Beer Run, elevating our menu
            with her signature relaxed decadence.
          </p>
        </div>
        <img
          className="w-full lg:w-1/2 rounded-xl shadow-lg"
          src={chef}
          alt="Our Team"
        />
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 mt-16 px-5 lg:px-32">
        <img
          className="w-full lg:w-1/2 rounded-xl shadow-lg"
          src={maryann}
          alt="Beer Run"
        />
        <div className="space-y-6 lg:pl-10">
          <h1 className="text-4xl font-bold text-center lg:text-left text-white">
            Mary Ann Parr
          </h1>
          <p className="text-lg leading-relaxed text-white">
            {" "}
            Mary Ann Parr is a notable figure in Charlottesville, Virginia,
            recognized for her entrepreneurial spirit and significant
            contributions to the local hospitality and culinary scenes.
            Throughout her diverse endeavors (The Virginian, Rococo&apos;s,
            Guesthouses in the Clouds), Mary Ann Parr has consistently
            demonstrated a commitment to fostering community and enhancing
            Charlottesville&apos;s hospitality landscape. Her legacy is evident
            in the thriving establishments she has nurtured and the vibrant
            culinary culture she has helped cultivate.
          </p>
        </div>
      </div>
    </div>
  );
}
