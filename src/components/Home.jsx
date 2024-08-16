import Button from "../common/Button";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/retailbeer4.jpg')] bg-cover bg-no-repeat  ">
      <div className=" w-full lg:w-2/3 space-y-5 ">
        <h1 className=" text-white  drop-shadow-2xl font-semibold text-6xl">
          Welcome to Beer Run
        </h1>
        <p className=" text-white drop-shadow-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iure
          quod officia nihil eos reiciendis perspiciatis voluptatem, qui iusto.
          Dolores.
        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now"></Button>
        </div>
      </div>
    </div>
  );
}
