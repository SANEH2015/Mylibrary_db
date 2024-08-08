// This component display 
import Bookcard from "./bookcard"
function Displaybook({bookList}){
console.log(bookList)
return(
    <>
  
    <div style={{
        display:"flex"
    }}>
    {bookList.map(item=>(
         <Bookcard key={item.ISBN} book={item}/>
        ))}
    </div>
    </>
)

}
export default Displaybook