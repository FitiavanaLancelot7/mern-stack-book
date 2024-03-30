import { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from "notistack"

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDelete = () => {
    setLoading(true);
    axios
    .delete(`http://localhost:3000/books/${id}`)
    .then(()=>{
      setLoading(false);
      enqueueSnackbar('Deleted successfully', { variant: "success" })
      navigate('/');
    })
    .catch((err)=>{
      setLoading(false);
      // alert('An Error was occured, Please check the console');
      enqueueSnackbar('Error', { variant: "error" })
      console.log(err);
    })
  }
  
  
  return (
    <div className='p-4 text-white'>
      <BackButton />
      { loading ? (<Spinner />) : '' }
      <div className="flex flex-col items-center border border-sky-400/40 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className='text-2xl text-slate-400'>Are you sure to delete this Book ?</h3>
        <button className="p-4 bg-red-600/70 rounded-md border border-transparent text-uppercase text-white/100 hover:bg-transparent hover:border hover:border-red-500 m-8 w-full cursor-pointer"
        onClick={handleDelete}>Yes, Delete it</button>
      </div>
    </div>
  )
}

export default DeleteBook
