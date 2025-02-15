import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { addToStoredWishList, getStoreReadList } from "../../utility/addToDb";
import Book from "../Book/Book";

const ListedBook = () => {
  const allBooks = useLoaderData();

  const [readList, setReadList] = useState([]);

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

  return (
    <div>
      <h2 className="text-4xl my-8 text-center font-bold">Book List</h2>
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
