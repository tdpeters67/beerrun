export default function KegForm({ handleChange }) {
  return (
    <div className="bg-gray-300 py-8 px-6 shadow rounded-lg sm:px-10   content-center place-self-center relative">
      <form action="POST" className="mb-0 space-y-6 ">
        <div>
          <label
            className="black text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              className=" w-full  border-gray-300 rounded-lg shadow-sm bg-indigo-50 focus:border-indigo-500 focus:ring-indigo-500"
              required
              type="text"
              placeholder="john doe"
              name="name"
            />
          </div>
        </div>

        <div>
          <label
            className="black text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              className=" w-full  border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
              type="text"
              placeholder="example@example.com"
              name="email"
            />
          </div>
        </div>

        <div>
          <label
            className="black text-sm font-medium text-gray-700"
            htmlFor="date"
          >
            Pickup Date
          </label>
          <div className="mt-1">
            <input
              className=" w-full  border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
              type="date"
              name="date"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="tap"
            name="tap"
            className="rounded focus:ring-indigo-500 text-indigo-500"
          />
          <label htmlFor="tap" className="ml-2 block text-sm text-gray-900">
            Do you need a tap for the keg(s)?
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="tub"
            name="tub"
            className="rounded focus:ring-indigo-500 text-indigo-500"
          />
          <label htmlFor="tub" className="ml-2 block text-sm text-gray-900">
            Do you need a tub for the keg(s)?
          </label>
        </div>

        <div>
          <label
            className="black text-sm font-medium text-gray-700"
            htmlFor="message"
          >
            What keg would you like? Make sure to include the size.
          </label>
          <div className="mt-1">
            <textarea
              className=" bg-gray-100 w-full "
              required
              name="message"
              placeholder="whatcha thinking?"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hoverLbg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send
        </button>
        <button className="absolute top-0 right-4 " onClick={handleChange}>
          X
        </button>
      </form>
    </div>
  );
}
