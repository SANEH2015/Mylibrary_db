//This component delete information
function Deletebook(ISBN){
    let delect = JSON.parse(localStorage.getItem("booktable"))

    function Handledelect(){

    }
return(
    <button onClick={Handledelect} style={{margin:"20px"}}>Delete</button>
)

}
export default Deletebook