import React from 'react'
import BookCard from './BookCard'
import { Book } from '@/types';

const BookList = async() => {
   //data fetching

   const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/books`);
   if(!response.ok){
     throw new Error('Am Error occured while fetching the books')
   }
   const books = await response.json();
   console.log('books',books);
   
 
  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-14'>
        {
            books.map((book:Book) => (
              <BookCard key={book._id} book={book}/>
            ))
        }
    </div>
  )
}

export default BookList