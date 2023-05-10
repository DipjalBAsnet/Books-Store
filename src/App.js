import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate.component";
import BookList from "./components/BookList.component";
import axios from "axios";

const App = () => {
  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const [books, setBooks] = useState([]);

  const editBookbyId = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    setBooks(response);

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBooksById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);

    setBooks(response);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDelete={deleteBooksById}
        onEdit={editBookbyId}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
};
export default App;
