import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack"

//To enable it use the BrowserRouter for the main.jsx
// Link used for href
// useNavigate for navigation in a synthaxe
//Routes and Route is the way of route


const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();


  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
    .post('https://mern-stack-book-api.vercel.app/books', data)
    
    // After the response loading will be removed
    .then(() =>{ 
      setLoading(false);
      enqueueSnackbar('Book created successfully', { variant: "success" });
      navigate('/');
    })
    .catch((err)=>{
      setLoading(false);
      enqueueSnackbar('All fields are required !', { variant: 'error' })
      console.log(err);
    })
    console.log(data);
  }


  return (
    <div className="p-4">
      <BackButton />
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-white/20 my-4">Create Book➕</h1>
        { loading ? (<Spinner />) : '' }
        <div className="flex flex-col border border-sky-400/20 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-400">Tilte</label>
          <input
          type="text"
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
          className="border border-gray-700 mt-2 rounded-lg focus:outline-none focus:border-sky-500/50 px-4 py-2 w-full text-slate-500" />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-400">Author</label>
            <input
            type="text"
            value={author}
            onChange={(e)=> setAuthor(e.target.value)}
            className="border border-gray-700 mt-2 rounded-lg focus:outline-none focus:border-sky-500/50 px-4 py-2 w-full text-slate-500" />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-400">Publish Year</label>
            <input
            type="number"
            value={publishYear}
            onChange={(e)=> setPublishYear(e.target.value)}
            className="border border-gray-700 mt-2 rounded-lg focus:outline-none focus:border-sky-500/50 px-4 py-2 w-full text-slate-500" />
          </div>
          <button className="hover:transition text-blue-950 hover:bg-transparent hover:text-sky-500 border border-transparent hover:border hover:border-sky-500 p-2 bg-sky-300 my-8 rounded-lg font-bold uppercase text-xl cursor-pointer" onClick={handleSaveBook}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
