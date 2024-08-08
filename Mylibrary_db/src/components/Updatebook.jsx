//This component update information
function Updatebook(){


    const handleUpdate = () => {
        const filteredData = filtedList.filter(item => item.ISBN !== ISBN);
        setFiltedList(filteredData);
        console.log(filteredData)
        localStorage.setItem('booktable', JSON.stringify(filteredData));
      };  
return(
<button onClick={handleUpdate}>Update</button>
)
    
}
export default Updatebook