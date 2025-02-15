import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3 space-y-3">
        {books.map((book, i) => (
          <Book key={i} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
