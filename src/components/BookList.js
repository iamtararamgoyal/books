import { useContext } from 'react';
import BooksContext from '../context/book';
import BookShow from './BookShow'

function BookList({ books, onDelete, onEdit }) {

    const { count, incrementCount } = useContext(BooksContext);
    const renderedBooks = books.map((book) => {
        return <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    });

    return <div className='book-list'>
        <h1>{count}</h1>
        <button onClick={incrementCount}>click</button>
        {renderedBooks}</div>
}

export default BookList