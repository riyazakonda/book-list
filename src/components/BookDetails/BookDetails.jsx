import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishList,
} from "../../utility/addToDb";

const BookDetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  // console.log(typeof bookId, typeof data[0].bookId, typeof id);

  const book = data.find((book) => book.bookId === id);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const heandleToRed = (id) => {
    addToStoredReadList(id);
  };

  const heandleWishList = (id) => {
    addToStoredWishList(id);
  };
  return (
    <div className="flex gap-8 py-6 ">
      <div className=" shadow-2xl rounded-xl">
        <img className="w-750 p-4" src={image} alt="" />
      </div>
      <div className="shadow-2xl rounded-xl">
        <div className="p-4">
          <div>
            <h2 className="text-4xl font-bold">{bookName}</h2>
            <h3 className="text-xl font-medium mt-4">By : {author}</h3>
            <hr />
            <p className="font-medium mt-4 mb-4">{category}</p>
            <hr />
            <h4 className="my-4">
              <span className="font-bold">review</span> : {review}
            </h4>

            <div className="flex justify-start gap-8 my-6">
              <span className="font-bold text-xl">Tag </span>
              {tags.map((tag, i) => (
                <button
                  className="btn rounded-full px-6 py-1 text-green-600"
                  key={i}
                  tag={tag}
                >
                  #{tag}
                </button>
              ))}
            </div>
            <hr />
            <div className="my-6 space-y-4">
              <p className="flex justify-start gap-16">
                <span>Number of Page :</span> {totalPages}
              </p>
              <p className="flex justify-start gap-32">
                <span>Publish :</span> {publisher}
              </p>
              <p className="flex justify-start gap-13">
                <span>Year of Publishing :</span> {yearOfPublishing}
              </p>
              <p className="flex justify-start gap-34">
                <span>Rating :</span> {rating}
              </p>
            </div>
            <div className="flex justify-start items-center gap-8">
              <button
                onClick={() => heandleToRed(bookId)}
                className="btn btn-outline btn-success rounded-full px-8 py-3"
              >
                Read
              </button>
              <button
                onClick={() => heandleWishList(bookId)}
                className="btn rounded-full bg-success text-white px-8 py-3"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
