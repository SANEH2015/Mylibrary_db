import { useState } from 'react'

import './App.css'

// import Deletebook from './components/Deletebook'
import Displaybook from './components/Display'
// import Updatebook from './components/Updatebook'
import Registerbook from './components/Registerbook'
import Bookcard from './components/bookcard'






function App() {
  const [count, setCount] = useState(0)

  let booktable =[
    { ISBN: "NO1",
      Title:"Alone-art",
      Num_of_pages:"500",
      Edition:"New edition",
      publisher:"Simpiwe ",
      Editor:"Dr mnguni",
      Cover_page_designer:"https://th.bing.com/th/id/R.c3f9b8c1b9b9c89807fb52a1e35f54fd?rik=blb%2ftC8jv6FJfQ&riu=http%3a%2f%2fwww.seacoastpress.com%2fwp-content%2fuploads%2f2015%2f12%2fMeyer-Front-Cover.jpg&ehk=bdf1AZ2ms5b5o6XwzFMOkNPu0KZH8vAjPRAAj21lajw%3d&risl=&pid=ImgRaw&r=0",
      Price:"R500",
      Format:"pdf",
      Relice_date:"04/01/2021",
    },
    {  ISBN: "NO2",
      Title:"Power",
      Num_of_pages:"100",
      Edition:"First edition",
      publisher:"Ayanda keys",
      Editor:"Dr smith",
      Cover_page_designer:"https://mir-s3-cdn-cf.behance.net/project_modules/fs/035661107964083.5fb3763094168.jpg",
      Price:"R200",
      Format:"pdf",
      Relice_date:"05/05/2020",
    },
    { ISBN: "NO3",
      Title:"Beautity",
      Num_of_pages:"300",
      Edition:"New edition",
      publisher:"sanele mkhize",
      Editor:"Dr keys",
      Cover_page_designer:"https://th.bing.com/th/id/R.8c98348162f66acd1ce4845daf8e3281?rik=pO62t8HNNHeVeA&riu=http%3a%2f%2fwww.seacoastpress.com%2fwp-content%2fuploads%2f2015%2f12%2fWiseman-Touched-highWEB.jpg&ehk=tKmQo1smcXJ2gzMmYb8g2EGyCjVH6HaTSAt6VRV3mS0%3d&risl=&pid=ImgRaw&r=0",
      Price:"R100",
      Format:"pdf",
      Relice_date:"20/04/2023",
    }
   
  ]
  // localStorage.setItem('booktable',JSON.stringify(booktable));
  // let book_list = []
  

  return (
    <>
   {/* <Addbook book ={booktable[0]}/> */}
   
    {/* <Deletebook/> */}
    <Displaybook/>
    {/* <Updatebook/> */}
    <Registerbook/>
    <Bookcard book ={booktable[0]}/>
    </>
  )
}

export default App
