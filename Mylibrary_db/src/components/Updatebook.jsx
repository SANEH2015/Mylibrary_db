//This component update information
import { useState, useEffect } from "react";
function UpdateBook({ ISBN, title, author, ...rest }) {
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("booktable"));
    setFilteredList(storedData || []);
  }, []);

  const handleUpdate = (updatedBook) => {
    const newFilteredList = filteredList.map((book) =>
      book.ISBN === updatedBook.ISBN ? updatedBook : book
    );
    setFilteredList(newFilteredList);
    localStorage.setItem("booktable", JSON.stringify(newFilteredList));
  };

  // ... rest of the component
return(
<button onClick={handleUpdate} style={{backgroundColor:"green",color:"white"}}>Update</button>
)
    
}
export default UpdateBook