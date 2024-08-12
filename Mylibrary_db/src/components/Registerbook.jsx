import React,{useState} from "react";
import {addbook} from "./Addbook"

function Registerbook(){
  
  const [book, setBook] = useState({
    ISBN: "",
    Title:"",
    Num_of_pages:"",
    Edition:"",
    publisher:"",
    Editor:"",
    Cover_page_designer:"",
    Price:"",
    Format:"",
    Relice_date:"",})
    
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // asyncddbook()
    console.log("new book",book);
 addbook(book)
  }

  
return(
    <>
    <div className="main" >
      <div className="image">
       
      </div>
    <div className="container" style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          backgroundColor:"rgb(183, 212, 254)",
          height:"700px",
          width:"40%",
       
          // boxShadow:"11px 11px 11px 11px rgb(183, 212, 254)",
          borderRadius:"10px",
         
          margin:"20px"
         
  
    }}>
        <div className="header">
          <h3 className="text">Register Form</h3>
          <div className="underline"></div>
        </div>
        
        <form className="input" onSubmit={handleSubmit}>
          {/* <div className="input" > */}
          
            <input type="text" onChange={handleChange} name="ISBN"  value={book.ISBN ||""}  placeholder="ISBN" style={{width:"50%",height:"40px",borderRadius:"10px",border:"none",margin:"10px" , padding:"10px"}} ></input>
          {/* </div> */}
          {/* <div className="input"> */}
         
            <input type="text" placeholder="Title" onChange={handleChange} name="Title" value={book.Title ||""} style={{width:"50%",height:"40px",borderRadius:"10px",border:"none",margin:"10px",padding:"10px"}}></input>
          {/* </div> */}
          {/* <div className="input"> */}
         
          <input type="text" onChange={handleChange} name="Num_of_pages"  value={book.Num_of_pages ||""}  placeholder="Num_of_pages" style={{width:"50%",height:"40px",borderRadius:"10px",border:"none",margin:"10px" , padding:"10px"}} ></input>
          {/* </div>
          <div className="input"> */}
            
          
            <input type="text" placeholder=" Edition" onChange={handleChange} name=" Edition" value={book. Edition ||""} style={{width:"50%",height:"40px",borderRadius:"10px",border:"none",margin:"10px",padding:"10px"}}></input>
          {/* </div> */}
          {/* <div className="input"> */}
          
            <input type="text" onChange={handleChange} value={book.publisher ||""} name="publisher" placeholder="publisher"style={{width:"50%",height:"40px",borderRadius:"10px",border:"none",margin:"10px",padding:"10px"}}></input>
          {/* </div> */}
          {/* <div className="input"> */}
          
          <input type="text" onChange={handleChange} value={book.Editor ||""} name="Editor" placeholder="Editor"style={{width:"50%",height:"40px",borderRadius:"10px",border:"none",margin:"10px",padding:"10px"}}></input>
        {/* </div>
          <div className="input"> */}
          <input type="text" onChange={handleChange} value={book.Cover_page_designer ||""} name="Cover_page_designer" placeholder="Cover_page_designer"style={{width:"50%",height:"40px",borderRadius:"10px",border:"none",margin:"10px",padding:"10px"}}></input>
        {/* </div>
          <div className="input">  */}
        
        <input type="text" placeholder="Price" onChange={handleChange} name="Price" value={book.Price ||""} style={{width:"50%",height:"40px",borderRadius:"10px",border:"none",margin:"10px",padding:"10px"}}></input>
          {/* </div>
          <div className="input"> */}
        
            <input type="text" onChange={handleChange} value={book.Format ||""} name="Format"  placeholder="Format"style={{width:"50%",height:"40px",borderRadius:"10px",border:"none",margin:"10px",padding:"10px"}}></input>
          {/* </div>
          <div className="input"> */}
        
            <input type="date"  onChange={handleChange} value={book. Relice_date||""} name="Relice_date" placeholder="Date"style={{width:"50%",height:"40px",borderRadius:"10px",border:"none",margin:"10px",padding:"10px"}}></input>
          {/* </div> */}
          <button >Register</button>
        </form>
        
        
      </div>
     
      </div>
      
    </>
)
}
export default Registerbook