import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner';


const ShowBook = () => {
const [book, setBook] = useState({});
const [loading, setLoading] = useState(false);
const { id } = useParams();

useEffect(()=>{
  setLoading(true);
  axios
  .get(`https://mern-stack-book-api.vercel.app/books/${id}`)
  .then((res)=>{
    setBook(res.data);
    setLoading(false);
  })
  .catch((err)=>{
    console.log(err);
    setLoading(false);
  })
}, [])

  return (
    <>
    <div className="p-4">
    <BackButton />
    </div>
    <div className='flex flex-col items-center p-4 text-slate-700'>
      <h1 className='text-white/20 text-3xl my-4'>Show Book📚</h1>
      {
        loading ? (<Spinner />) : (
          <div className="flex flex-col border border-sky-400/20 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className='text-xl ml-4 text-gray-500 mr-2'>Id :</span>
              <span className='text-white/70'>{book._id}</span>
            </div>
            <div className="my-4">
              <span className='text-xl ml-4 text-gray-500 mr-2'>Title :</span>
              <span className='text-white/70'>{book.title}</span>
            </div>
            <div className="my-4">
              <span className='text-xl ml-4 text-gray-500 mr-2'>Author :</span>
              <span className='text-white/70'>{book.author}</span>
            </div>
            <div className="my-4">
              <span className='text-xl ml-4 text-gray-500 mr-2'>Publish Year :</span>
              <span className='text-white/70'>{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className='text-xl ml-4 text-gray-500 mr-2'>Create Time :</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className='text-xl ml-4 text-gray-500 mr-2'>Last Update Time :</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
          </div>
        )

      }
    </div>
    </>
  )
}

export default ShowBook
