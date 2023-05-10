import { useState } from "react";
import BookCreate from "./components/BookCreate.component";
import BookList from "./components/BookList.component";

const App = () => {
  const [books, setBooks] = useState([]);

  const editBookbyId = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBooksById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title },
    ];
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
