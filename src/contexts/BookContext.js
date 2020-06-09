import React, {createContext, useState} from 'react'

export const BookContext = createContext();


const BookContextProvider = (props) =>{

    const [books, setBooks] = useState([
        {title: 'The Mists of Avalon', author: 'Marion Z. Bradley', id: 1}
    ])

    const addBook = (title, author)=>{
        setBooks([...books, {title, author, id: books.length+1}])
    }


    return (
        <BookContext.Provider value={{books, addBook}}>
            {props.children}
        </BookContext.Provider>
    );
    
}

export default BookContextProvider;