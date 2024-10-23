
import './App.css'
import Header from './Components/header/Header'
import Blogs from './Components/blogs/Blogs'
import Bookmarks from './Components/bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }
  const handleMarkAsRead = (time, id) =>{
    // setReadingTime(readingTime + time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
   // remove the read blog from bookmark
  //  console.log('remove bookmark', id)
    const removeBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(removeBookmark)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex mx-auto max-w-4xl'>
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
