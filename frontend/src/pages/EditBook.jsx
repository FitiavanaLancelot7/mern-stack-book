import { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack"
//To enable it use the BrowserRouter for the main.jsx
// Link used for href
// useNavigate for navigation in a synthaxe
//Routes and Route is the way of route
//useParams is for receiving the id 


const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=> {
    setLoading(true);
    axios
    .get(`https://mern-stack-book-api.vercel.app/books/${id}`)
    .then((res)=>{
      setAuthor(res.data.author);
      setTitle(res.data.title);
      setPublishYear(res.data.publishYear);
      setLoading(false);
    })
    .catch((err)=>{
      setLoading(false);
      alert('An error was occured, Please check the console')
      console.log(err);
    })
  }, []);
  
  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
    .put(`https://mern-stack-book-api.vercel.app/books/${id}`, data)
    
    // After the response loading will be removed
    .then(() =>{ 
      setLoading(false);
      enqueueSnackbar('Book edited successfully', { variant: "success" })
      navigate('/');
    })
    .catch((err)=>{
      setLoading(false);
      // alert('An error was occured, Please check the console')
      enqueueSnackbar('Error', { variant: "error" })
      console.log(err);
    })
    console.log(data);
  }


  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-white/20 text-center text-3xl my-4">Edit Book ✒</h1>
      { loading ? (<Spinner />) : '' }
      <div className="flex flex-col border border-sky-400/20 rounded-xl w-[600px] p-4 mx-auto">
      <div className="my-4">
        <label className="text-xl mr-4 text-gray-300">Tilte</label>
        <input 
        type="text"
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        className="border border-gray-700 mt-2 rounded-lg focus:outline-none focus:border-sky-500/50 px-4 py-2 w-full text-slate-500" />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-300">Author</label>
          <input
          type="text"
          value={author}
          onChange={(e)=> setAuthor(e.target.value)}
          className="border border-gray-700 mt-2 rounded-lg focus:outline-none focus:border-sky-500/50 px-4 py-2 w-full text-slate-500" />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-300">Publish Year</label>
          <input
          type="number"
          value={publishYear}
          onChange={(e)=> setPublishYear(e.target.value)}
          className="border border-gray-700 mt-2 rounded-lg focus:outline-none focus:border-sky-500/50 px-4 py-2 w-full text-slate-500" />
        </div>
        <button className="hover:transition hover:bg-transparent text-blue-950 hover:text-sky-500 border border-transparent hover:border hover:border-sky-500 p-2 bg-sky-300 my-8 rounded-lg font-bold uppercase text-xl cursor-pointer" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
 );
};

export default EditBook;
