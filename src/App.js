import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleTheme from './components/ToogleTheme';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">

    <ThemeContextProvider>
      <Navbar />
      <BookContextProvider>
        <BookList />
      </BookContextProvider>
      <ToggleTheme/>
    </ThemeContextProvider>
    </div>
    
  );
}

export default App;
