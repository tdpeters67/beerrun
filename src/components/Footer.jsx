export default function Footer() {
  return (
    <div className="bg-backgroundColor text-white py-8 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-16 lg:px-32">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h1 className="text-2xl font-bold mb-2">Beer Run</h1>
          <p className="text-sm text-white">Eat. Drink. Shop. </p>
        </div>
        <div className="mb-8 md:mb-0">
          <h1 className="font-semibold text-lg mb-4">Hours</h1>
          <div className="space-y-1 text-sm">
            <p>Monday - Friday: 11am - 9pm</p>
            <p>Saturday: 11am - 9pm (Breakfast Tacos 10am - 1pm)</p>
            <p>Sunday: 11am - 9pm (Brunch 10am - 1pm)</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-lg mb-4">Contact Us</h1>
          <div className="space-y-2 text-sm ">
            <p>Email: info@beerrun.com</p>
            <p>Phone: 434-984-2337</p>
            <p>Address: 156 Carlton Rd, Suite 203, Charlottesville, VA 22902</p>
            <div className="flex space-x-4 mt-2 ">
              <a
                href="https://www.facebook.com/beer.run.charlottesville/"
                className="text-white hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/beerrunva/?hl=en"
                className="text-white hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
