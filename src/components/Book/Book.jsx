import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
  } = book;
  return (
    <div className="shadow-sm rounded-xl">
      <div className="card bg-base-100 w-96 pl-4 py-4  ">
        <figure className=" bg-[#F3F3F3] rounded-2xl py-8">
          <img className=" h-[166px]   " src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4 py-4 ">
            {(tags || []).map((tag, i) => (
              <button
                className="btn rounded-full py-1 px-6 text-green-600"
                key={i}
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className="font-medium">By : {author}</p>
          <div className="border-t-2 border-dashed py-2"></div>
          <div className="card-actions justify-between mb-4">
            <div className="badge badge-outline">{category}</div>
            <div>{totalPages}</div>
            <div className="badge badge-outline">
              {rating}
              <FaRegStar />
            </div>
          </div>
          <div className="text-center w-full border rounded-full text-white hover:bg-green-600 bg-gray-400 py-2 ">
            <Link className=" " to={`/books/${bookId}`}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
