import { useEffect, useState } from "react";

export function UserSearchBar() {

  const [searchInput, setSearchInput] = useState("");


const handleSubmit = () => {
  console.log(`form submitted`)
}

const onButton = (e) => {
e.preventDefault();

console.log(searchInput);
}

  useEffect(() => {
    const keyDownHandler = event => {
    

      if (event.key === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();

        // 👇️ your logic here
        handleSubmit();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);


  

  
  
  return (
    <>
      <form  className="mt-1">
        <div className=" border-2 border-gray-300">
        <input
          type="search"
          className=" bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none  "
          placeholder="Search Users" value={searchInput} onChange={event => setSearchInput(event.target.value)}
        />
        <button  className="   bg-gray-400 text-white  h-8 mr-1 px-1">Search</button>
        </div>

        
      </form>
    </>
  );
}
