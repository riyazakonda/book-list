import book from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200  my-12  rounded-lg max-w-6xl mx-auto h-[554px] shadow">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={book} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold mr-24 mb-12">
            Books to freshen up <br />
            your bookshelf
          </h1>

          <button className="btn  text-white rounded-md bg-[#23BE0A]">
            View the List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
