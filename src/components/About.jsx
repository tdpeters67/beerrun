import beerrun1 from "../assets/beerrun1.jpg";
import theteam from "../assets/theteam.jpg";

export default function About() {
  return (
    <div className=" min-h-screen  bg-greyColor text-white py-20 ">
      <div className=" flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 gap-5">
        <img className="pt-10 w-[50%]" src={beerrun1} alt="john" />
        <div className="space-y-4 lg:pt-14">
          <h1 className="font-semibold text-4xl text-center md:text-start">
            17 years!
          </h1>
          <p>
            Beer Run is the quintessential downtown Charlottesville family
            restaurant. Family owned and operated, Beer Run was founded in
            December 2007. Beer Run is located on the edge of the Belmont and
            Woolen Mills neighborhoods, and serves countless families every
            week. Step-brothers Josh Hunt and John Woodriff, with the
            encouragement of their parents, wanted to open a retail craft beer
            and wine store. That idea blossomed into not only Charlottesville’s
            most extensive craft beer bottle store but one of Draft Magazine’s
            America’s 100 Best Beer Bars 2014 and 2015. Beer Run is a craft beer
            bottle and wine shop, restaurant, and bar all wrapped up in one. It
            is kid friendly, pet friendly, and an overall great neighborhood
            hangout. The food menu is carefully planned to maximize seasonal,
            locally sourced and organic ingredients. Looking for more seating
            and venue space for holiday parties? Visit Beer Run’s second
            Charlottesville venture, Kardinal Beer Hall and Garden at 722
            Preston Ave!
          </p>
        </div>
      </div>
      <div className="  text-white flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 gap-5">
        <div className="space-y-4 lg:pt-14">
          <h1 className="font-semibold text-4xl text-center md:text-start">
            Now!
          </h1>
          <p>
            Our Staff is lovingly committed to doing a bunch of nice things for
            guests! They want to serve you sooo bad! Anything you need, we can
            handle it!
          </p>
        </div>
        <img className="pt-10 w-[50%]" src={theteam} alt="john" />
      </div>
    </div>
  );
}
