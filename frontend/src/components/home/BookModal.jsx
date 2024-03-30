import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";



const BookModal = ({ book, onClose }) => {


  return (
    <div className="fixed bg-slate-950/10 backdrop-blur-md inset-0 z-50 flex justify-center items-center">
        <div onClick={(e)=>e.stopPropagation()} className="w-[600px] max-w-full h-[400px] bg-slate-950 border border-blue-700/20 rounded-xl p-4 flex flex-col relative">
            <AiOutlineClose className="absolute hover:text-red-800 right-6 top-6 text-red-600 cursor-pointer" onClick={onClose} />
        <h2 className="relative float-right right-0 mb-2 w-fit px-4 py-1 border border-slate-700 text-slate-700 rounded-lg">
              {book.publishYear}
            </h2>
            <h4 className="my-2 text-gray-400">
            {book._id}
            </h4>
            <div className="flex justify-start items-center gap-x-2">
              <PiBookOpenTextLight className="text-red-300/30 text-2xl" />
              <h2 className="my-1">{book.title}</h2>
            </div>
            <div className="flex items-center gap-x-2">
              <BiUserCircle className="text-red-300/20 text-2xl" />
              <h2 className="my-1">{book.author}</h2>
            </div>
        </div>
    </div>
  )
}

export default BookModal
