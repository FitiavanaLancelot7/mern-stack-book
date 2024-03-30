import { Link } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"


const BackButton = ({ destination='/' }) => {
  return (
    <div className="inline-flex">
      <Link to={destination} className="bg-sky-800/40 hover:transition border border-transparent hover:bg-transparent hover:border-blue-400/30 text-white px-4 py-1 rounded-lg w-fit">
        <BsArrowLeft className="text-2xl" />
      </Link>
    </div>
  )
}

export default BackButton
