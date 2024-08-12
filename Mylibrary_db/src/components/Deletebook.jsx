//This component delete information
import { useState,useEffect } from "react";
function Deletebook({ISBN}){
    const [filtedList, setFiltedList] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("booktable"));
    setFiltedList(storedData || []);
  }, []);
    const handleDelete = () => {
    const filteredData = filtedList.filter(item => item.ISBN !== ISBN);
    setFiltedList(filteredData);
    console.log(filteredData)
    localStorage.setItem('booktable', JSON.stringify(filteredData));
  };
return(
    <button onClick={handleDelete} style={{margin:"20px",backgroundColor:"red",color:"white"}}>Delete</button>
)

}
export default Deletebook