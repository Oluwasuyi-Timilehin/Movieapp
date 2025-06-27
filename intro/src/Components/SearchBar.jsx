

const SearchBar = ({ setQuery }) => {
  return (
    <>
      <section className="flex container mt-10 mx-auto px-4 justify-center items-center">
        <div className="w-11/12 md:w-8/12 lg:w-6/12">
          <input
            type="text"
            className="w-full py-3 pl-6 pr-32 bg-white shadow-xl rounded-full focus:outline-none focus:shadow-lg"
            placeholder="Search Movies"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button className="absolute text-white bg-secondary px-6 py-1.5 rounded-full -ml-[108px] mt-[7px]">
            Search
          </button>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
