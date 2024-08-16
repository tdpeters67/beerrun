export default function Footer() {
  return (
    <div className="bg-greyColor text-white  mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4 ">
          <h1 className="justify-center">Beer Run</h1>
          <p>Drink more Natty Bo</p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Hours</h1>
          <div className="flex flex-col gap-1">
            <p>Monday 11am-9pm</p>
            <p>Tuesday 11am-9pm</p>
            <p>Wednesday 11am-9pm</p>
            <p>Thursday 11am-9pm</p>
            <p>Friday 11am-9pm</p>
            <p>
              Saturday 11am-9pm
              <span>Breakfast Tacos 10am-1pm</span>
            </p>
            <p>
              Sunday 11am-9pm
              <span>Brunch 10am-1pm</span>
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <div className="flex flex-col gap-2">
            <p>info@beerrun.com</p>
            <p>434-984-2337</p>
            <p>156 Carlton Rd, Suite 203, Charlottesville, VA 22902</p>
            <a href="/">Facebook</a>
            <a href="/"> Instagram </a>
          </div>
        </div>
      </div>
    </div>
  );
}
