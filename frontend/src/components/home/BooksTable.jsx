import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'


const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-1 my-8'>
    <thead>
      <tr>
        <th className='p-2 px-10 bg-gradient-to-t from-blue-700/30 border border-slate-600/10 rounded-tl-md '>N°</th>
        <th className='p-2 px-10 bg-gradient-to-t from-blue-700/30 border border-slate-600/10'>Title</th>
        <th className='p-2 px-10 bg-gradient-to-t from-blue-700/30 border border-slate-600/10 max-md:hidden'>Author</th>
        <th className='p-2 px-10 bg-gradient-to-t from-blue-700/30 border border-slate-600/10 max-md:hidden'>Publish Year</th>
        <th className='p-2 px-10 bg-gradient-to-t from-blue-700/30 border border-slate-600/10 rounded-tr-md '>Operations</th>
      </tr>
    </thead>
    <tbody>
      {// The lists
        books.map((book, index)=>(
          <tr key={book._id} className='h-8'>
            <td className={`${ index == books.length - 1  ? 'rounded-bl-md' : ''} text-slate-700 border-slate-800 border py-1 text-center`}>
              { index + 1 }
            </td>
            <td className="border border-slate-800 text-slate-500 px-2 text-center">
              {
                book.title
              }
            </td>
            <td className="border border-slate-800 py-1 text-slate-500 px-2 text-center max-md:hidden">
              {
                book.author
              }
            </td>
            <td className="border border-slate-800 py-1 text-slate-500 px-2 text-center max-md:hidden">
              {
                book.publishYear
              }
            </td>
            <td className={`${ index == books.length - 1  ? 'rounded-br-md' : ''} text-slate-700 border-slate-800 border py-1 text-center`}>
              <div className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800 hover:text-green-500 transition hover:transition' />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-yellow-400 transition hover:transition' />
                </Link>
                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600 hover:text-red-400 transition hover:transition' />
                </Link>
              </div>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
  )
}

export default BooksTable
