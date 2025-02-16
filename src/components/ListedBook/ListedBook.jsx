import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { addToStoredWishList, getStoreReadList } from "../../utility/addToDb";
import Book from "../Book/Book";

const ListedBook = () => {
  const allBooks = useLoaderData();

  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const getStoreRead = getStoreReadList();
    const getStoreReadListInt = getStoreRead.map((id) => parseInt(id));
    console.log(allBooks, getStoreReadListInt, getStoreRead);

    //
    const readBookList = allBooks.filter((book) =>
      getStoreReadListInt.includes(book.bookId)
    );

    setReadList(readBookList);
  }, []);

  const heandleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "Number of Pages") {
      const sortReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortReadList);
    }
    if (sortType === "Reatings") {
      const sortReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortReadList);
    }
  };
  return (
    <div>
      <h2 className="text-4xl my-8 text-center font-bold">Book List</h2>
      <div className="dropdown mb-20 flex justify-center items-center">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `sort by: ${sort}` : "Sort By"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={() => heandleSort("Reatings")}>
            <a>Reating</a>
          </li>
          <li onClick={() => heandleSort("Number of Pages")}>
            <a>Number of Pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-bold">
            Books I Read: {readList.length}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {readList.map((book, i) => (
              <Book key={i} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-bold">My wish list:</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
