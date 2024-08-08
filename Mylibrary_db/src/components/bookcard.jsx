import Deletebook from "./Deletebook"
import Updatebook from "./Updatebook"
function Bookcard({book}){
return(
    <>
    <div className="card"style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor:"white",
        height:"600px",
        width:"30%",
        boxShadow:"11px 11px 11px 11px #a3d1daaa",
        borderRadius:"10px",
       
        margin:"20px"

       

    }}>
       <div className="image" ><img src={book.Cover_page_designer } alt="200px" ></img>   </div>
       <h1  className="title" style={{marginRight:""}}>{book.Title}</h1 >
       <span className="Auther" style={{fontSize:"20px",marginRight:""}} > {book.publisher}</span>
    <h6 className="price"  style={{fontSize:"20px",marginRight:""}}>{book.Price}</h6>
    <div style={{display:"flex"}}>
    <Deletebook ISBN={book.ISBN}/>
    <div style={{padding:"2px",marginTop:"15px",color:"green"}} ><Updatebook /></div>
    </div>
    </div>
  
    </>
)

}
export default Bookcard