import React, { useState } from 'react'
import axios from 'axios';
export default function BookApp() {

    const [book, setbook] = useState([{
            "book_name":"",
            "author":"",
            "price":"",
            "id":0
    }]);

    // const {
    //     "product_name":product,

    // }
    function changeDetails(e){

      let value = e.target.value;
      setbook({...book,[e.target.name]:value});

    };
    //  function printDetails(e){
    //     console.log(e);
    //  }
    const insertAction= async(e)=>{    

           await axios.post('http://localhost:8081/book_api/save_book',book)     
            };
        // console.log(Book);};
   // axios.post("url",product);
   return (
    <>
        <div>BookApp</div>
        <input type="text" name="id" id="id" value={book.id} onChange={(e)=>changeDetails(e)} />
        <br/><br/>
        <input type="text" name="name" id="name" value={book.name} onChange={(e)=>changeDetails(e)} />
        <br/><br/>
        <input type="text" name="authorname" id="authorname" value={book.authorname} onChange={(e)=>changeDetails(e)} />
        <br/><br/>
        <input type="text" name="price" id="price" value={book.price} onChange={(e)=>changeDetails(e)} />
        <br/><br/>
        
        <input type="submit" name="Insert" value="Insert" onClick={(e)=>insertAction(e)}/>


    </>
   )
}