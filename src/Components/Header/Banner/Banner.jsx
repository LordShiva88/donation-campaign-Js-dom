import './Banner.css'
const Banner = () => {
  return (
    <div className="flex flex-col justify-center md:h-[600px] lg:p-0 p-10 items-center bg-image overlay">
      <h1 className="md:text-5xl text-3xl font-bold text-center">I Grow By Helping People In Need</h1>
      <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem] mt-10">
        <input
          type="email"
          className="peer h-full w-full rounded-[7px] border border-gray-400 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder="Search here"
          required
        />
        <button
          className="!absolute right-1 top-1 z-10 select-none rounded bg-[#FF444A] py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg"
          type="button"
          data-ripple-light="true"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
