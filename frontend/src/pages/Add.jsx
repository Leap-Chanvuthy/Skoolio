import { useEffect, useState } from "react";

const Add = () => {
    const [firstname , setFirstname] = useState(null);
    const [lastname , setLastname] = useState (null);
    const [DOB , setDOB] = useState(null);
    const [major , setMajor] = useState(null);
    const [generation , setGeneration] = useState(null);
    const [photo , setPhoto] = useState(null);

    useEffect(() => {
      

    },[])
    
    return (
      <div className="flex justify-center w-full items-center">
        <form className="w-full max-w-md">
          <h3 className="mb-6 text-center text-2xl">Add a new Student / Employee</h3>
  
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label for="first_name" className="block mb-2">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
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
                className="input input-bordered w-full max-w-xs"
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
                className="input input-bordered w-full max-w-xs"
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
                className="input input-bordered w-full max-w-xs"
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
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div>
              <label >Photo</label>
              <input type="file" className="file-input file-input-bordered file-input-neutral w-full max-w-xs" />
            </div>
          </div>
          
  
          <button type="submit" className="w-full mt-6 btn btn-primary">
            Insert
          </button>
        </form>
      </div>
    );
  };
  
  export default Add;
  