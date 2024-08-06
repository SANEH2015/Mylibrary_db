function Registerbook(){
return(
    <>
    <div className="container" style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          backgroundColor:"lightblue",
          height:"600px",
          width:"40%",
          boxShadow:"11px 11px 11px 11px #a3d1daaa",
          borderRadius:"10px",
          padding:"100px",
          margin:"20px"
         
  
    }}>
        <div className="header">
          <h3 className="text">Register Form</h3>
          <div className="underline"></div>
        </div>
        <div className="input">
          <div className="input" >
          
            <input type="text" placeholder="ISBN" style={{width:"150%",height:"40px",borderRadius:"10px",border:"none",margin:"10px"}} ></input>
          </div>
          <div className="input">
         
            <input type="Email" placeholder="Title" style={{width:"150%",height:"40px",borderRadius:"10px",border:"none",margin:"10px"}}></input>
          </div>
          <div className="input">
         
            <input type="Password" placeholder="Number of pages"style={{width:"150%",height:"40px",borderRadius:"10px",border:"none",margin:"10px"}}></input>
          </div>
          <div className="input">
          
            <input type="Password" placeholder="Edition"style={{width:"150%",height:"40px",borderRadius:"10px",border:"none",margin:"10px"}}></input>
          </div>
          <div className="input">
        
            <input type="Password" placeholder="Cover designer"style={{width:"150%",height:"40px",borderRadius:"10px",border:"none",margin:"10px"}}></input>
          </div>
          <div className="input">
        
            <input type="Password" placeholder="Price"style={{width:"150%",height:"40px",borderRadius:"10px",border:"none",margin:"10px"}}></input>
          </div>
          <div className="input">
        
            <input type="Password" placeholder="Format"style={{width:"150%",height:"40px",borderRadius:"10px",border:"none",margin:"10px"}}></input>
          </div>
          <div className="input">
        
            <input type="Password" placeholder="Date"style={{width:"150%",height:"40px",borderRadius:"10px",border:"none",margin:"10px"}}></input>
          </div>
          
        </div>
        
        <div className="submit">
        <button>Submit</button>
          
        </div>
      </div>
     
   
      
    </>
)
}
export default Registerbook