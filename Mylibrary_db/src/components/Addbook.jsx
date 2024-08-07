//This component create a new book

 export function addbook(book){
 let mybooks = JSON.parse(localStorage.getItem("booktable"))

mybooks.push(book) //sending mybooks to book

localStorage.setItem('booktable',JSON.stringify(mybooks)) //note when you are putting data back the key changed to the variable created above
}
