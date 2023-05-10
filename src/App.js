import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate.component";
import BookList from "./components/BookList.component";
import BooksContext from "./context/books";

const App = () => {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};
export default App;
