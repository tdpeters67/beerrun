export default function EventForm() {
  return (
    <div className=" bg-gray-300 py-8 px-6 shadow rounded-lg sm:px-10 w-1/2  content-center place-self-center">
      <form action="POST" className="mb-0 space-y-6">
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
              name="name"
            />
          </div>
        </div>

        <div>
          <label
            className="black text-sm font-medium text-gray-700"
            htmlFor="date"
          >
            Date
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

        <div>
          <label
            className="black text-sm font-medium text-gray-700"
            htmlFor="time"
          >
            Time
          </label>
          <div className="mt-1">
            <input
              className=" w-full  border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
              type="time"
              name="time"
            />
          </div>
        </div>

        <div>
          <label
            className="black text-sm font-medium text-gray-700"
            htmlFor="message"
          >
            Tell us more!
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
      </form>
    </div>
  );
}
