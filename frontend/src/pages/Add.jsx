import {  useState } from "react";
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [firstname , setFirstname] = useState('');
    const [lastname , setLastname] = useState ('');
    const [DOB , setDOB] = useState('');
    const [major , setMajor] = useState('');
    const [generation , setGeneration] = useState('');
    const [photo , setPhoto] = useState('');
    const [error , setError] = useState (null);
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const respone = await fetch ('/api/students' , {
        method : 'POST',
        body : JSON.stringify({firstname , lastname , DOB , major , generation , photo}),
        headers : {'Content-Type' : 'application/json'}
      })
      const data = await respone.json();
      if (!respone.ok){
        setError(data.error);
      }
      if (respone.ok){
        setFirstname('');
        setLastname('');
        setDOB('');
        setMajor('');
        setGeneration('');
        setPhoto('');
        setError(null)
        navigate('/student');
      }

    }

    return (
      <div className="flex justify-center w-full items-center">
        <form className="w-full max-w-md" onSubmit={handleSubmit}  enctype="multipart/form-data">
          <h3 className="mb-6 text-center text-2xl">Add a new Student</h3>
  
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label for="first_name" className="block mb-2">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="Type here"
                className={`input input-bordered w-full max-w-xs }`}
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
              />
            </div>
  
            <div>
              <label for="last_name" className="block mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                placeholder="Type here"
                className={`input input-bordered w-full max-w-xs`}
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
              />
            </div>
  
            <div>
              <label for="date_of_birth" className="block mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                id="date_of_birth"
                placeholder="Type here"
                className={`input input-bordered w-full max-w-xs`}
                onChange={(e) => setDOB(e.target.value)}
                value={DOB}
              />
            </div>
  
            <div>
              <label for="major" className="block mb-2">
                Major
              </label>
              <input
                type="text"
                id="major"
                placeholder="Type here"
                className={`input input-bordered w-full max-w-xs `}
                onChange={(e) => setMajor(e.target.value)}
                value={major}
              />
            </div>
  
            <div>
              <label for="generation" className="block mb-2">
                Generation
              </label>
              <input
                type="text"
                id="generation"
                placeholder="Type here"
                className={`input input-bordered w-full max-w-xs `}
                onChange={(e) => setGeneration(e.target.value)}
                value={generation}
              />
            </div>
            <div>
              <label >Photo</label>
              <input type="file" 
              className={`file-input file-input-bordered file-input-neutral w-full max-w-xs `}
              onChange={(e) => setPhoto(e.target.files[0])}
               />
            </div>
          </div>
          <button className="w-full mt-6 btn btn-primary">
            Insert
          </button>
          {error && 
          <div className="alert alert-error mt-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{error}</span>
          </div>
          }
        </form>
      </div>
    );
  };
  
  export default Add;
  