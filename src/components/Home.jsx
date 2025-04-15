import Button from "../common/Button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center bg-cover bg-no-repeat bg-[url('./assets/splashImage.jpg')]">
      <div className="container mx-auto flex flex-col lg:w-2/3 space-y-8 p-8 bg-black/50 rounded-lg shadow-lg">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Welcome to Beer Run
        </h1>
        <p className="text-lg md:text-xl text-white drop-shadow-md leading-relaxed">
          We are Charlottesville&apos;s premier destination for craft beer
          enthusiasts and food lovers alike. Nestled at 156 Carlton Road, on the
          edge of the Belmont and Woolen Mills neighborhoods, Beer Run has been
          proudly family-owned and operated since its founding in December 2007.
        </p>
        <div className="flex justify-start">
          <Button
            title="Order Now"
            className="px-6 py-3  text-white font-semibold rounded-xl shadow-md transition"
          />
        </div>
      </div>
    </div>
  );
}
