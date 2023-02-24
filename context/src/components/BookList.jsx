import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { theme } = useContext(ThemeContext);
  const {isLightTheme, light, dark} = theme
  const themes = isLightTheme ? light : dark;
  const books = [
    "the way of kings",
    "the name of the wind",
    "the final empire",
  ];

  return (
    <div
      className="book-list"
      style={{ color: themes.syntax, background: themes.bg }}
    >
      <ul>
        {books.map((book) => (
          <li key={book} style={{ background: theme.ui }}>
            {book}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
