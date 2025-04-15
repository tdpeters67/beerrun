export default function Button({ title }) {
  return (
    <div>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://order.toasttab.com/online/beerrun";
        }}
        className=" px-6 py-1 border-2 bg-backgroundColor border-black text-white hover:bg-brightColor hover:text-white transition-all rounded-full"
      >
        {title}
      </button>
    </div>
  );
}
