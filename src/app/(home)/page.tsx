import Banner from "@/app/(home)/components/Banner";
import Image from "next/image";
import BookList from "./components/BookList";

export default async function Home() {

  //data fetching

  // const response = await fetch(`${process.env.BACKEND_URL}/books`);
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/books`);
  if(!response.ok){
    throw new Error('Am Error occured while fetching the books')
  }
  const books = await response.json();
  console.log('books',books);
  

  return (
    <>
    <Banner/>
    <BookList books={books}/>
    </>
  );
}
