import ReviewTile from "../common/ReviewTile";
import johnimg from "../assets/john.jpg";

export default function Reviews() {
  return (
    <div className="min-h-screen flex flex-col bg-red-600 justify-center items-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer Reviews
      </h1>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <ReviewTile img={johnimg} name="John Doe" />
        <ReviewTile img={johnimg} name="John Doe" />
        <ReviewTile img={johnimg} name="John Doe" />
      </div>
    </div>
  );
}
