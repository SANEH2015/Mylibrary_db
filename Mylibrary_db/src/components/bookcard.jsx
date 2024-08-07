import Deletebook from "./Deletebook"
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
        width:"40%",
        boxShadow:"11px 11px 11px 11px #a3d1daaa",
        borderRadius:"10px",
       
        margin:"20px"

       

    }}>
       <div className="image" ><img src={book.Cover_page_designer } alt="200px" ></img>   </div>
       <h1  className="title" style={{marginRight:"300px"}}>{book.Title}</h1 >
       <span className="Auther" style={{fontSize:"20px",marginRight:"400px"}} > {book.publisher}</span>
    <h6 className="price"  style={{fontSize:"20px",marginRight:"440px"}}>{book.Price}</h6>
    <Deletebook/>
    </div>
  
    </>
)

}
export default Bookcard