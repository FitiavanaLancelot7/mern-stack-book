import { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox} from 'react-icons/md'
import BooksTable from '../components/home/BooksTable'
import BooksCard from '../components/home/BooksCard'


const Home = () => {
const [books, setBooks] = useState([]);
const [loading, setLoading] = useState(false);
const [showType, setShowType] = useState('table');
axios.defaults.withCredentials = true;


useEffect(() => {
  setLoading(true);
  axios
  .get('https://mern-stack-book-api.vercel.app/books')
  .then((res)=> {
    setBooks(res.data.data);
    setLoading(false)
  }).catch((err)=>{
    console.log(err);
    setLoading(false);
  })

}, [])



  return (
    <div className='p-4 text-white w-full flex flex-col items-center'>
      <div className="flex items-center">
        <div className="flex justify-center items-center gap-x-4">
          <button className={`${showType === 'table' ? 'bg-sky-600' : 'text-slate-900 bg-gradient-to-b from-sky-300'} transition hover:transition-colors font-bold px-4 py-1 hover:bg-sky-600 rounded-l-sm cursor-pointer`}
          onClick={()=> setShowType('table')}>Table</button>
        </div>
        <div className="flex justify-center items-center gap-x-4">
          <button className={`${showType === 'card' ? 'bg-sky-600' : 'text-slate-900 bg-gradient-to-t from-sky-300'} transition hover:transition-colors font-bold from-sky-300 hover:bg-sky-600 px-4 py-1 rounded-r-sm cursor-pointer`}
          onClick={()=> setShowType('card')}>Card</button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <h1 className='text-3xl my-8 mr-4 text-white/20'>
            Book List
          </h1>
            <Link to='/books/create'>
            <MdOutlineAddBox className=' text-sky-800 text-4xl transition hover:text-sky-500' />
            </Link>
          </div>
          {
            
            loading ? (<Spinner />) : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)

          }
      </div>
    </div>
  )
}

export default Home
