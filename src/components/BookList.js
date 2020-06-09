import React, {useState, useContext} from 'react';
import {ThemeContext} from '../contexts/ThemeContext'
import { BookContext } from '../contexts/BookContext';

const BookList = () => {

        const [title, setTitle] = useState('')
        const [author, setAuthor] = useState('')

        const themeContext = useContext(ThemeContext)
        const bookContext = useContext(BookContext)

        const {isLightTheme, dark, light} = themeContext
        const theme = isLightTheme ? light : dark

        const {books, addBook} = bookContext
        console.log(title)
        console.log(author)
        return (
      

            <div className='book-list' style ={{background: theme.bg, color: theme.syntax}}>
                <ul>
        {books.map( book => <li key={book.id} style={{background: theme.ui}}> {book.title}, {book.author}</li>)}
                </ul>

                <div>
                    <span>Title  </span>
                    <input value={title} onChange={ (e) => setTitle(e.target.value)}></input>
                </div>
                
                <div>
                    <span>Author </span>
                    <input  value={author} onChange={ (e) => setAuthor(e.target.value)}></input>
                </div>
                <button onClick={(e)=>{
                    // e.preventDefault()
                    addBook(title, author)
                }}>Add Book</button>

            </div>

            
         
        );
    
}

export default BookList;