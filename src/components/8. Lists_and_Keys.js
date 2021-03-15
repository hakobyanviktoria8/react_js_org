import {useState} from "react";

function List_Keys(props) {
    const [inputValue, setInputValue] = useState("");
    const [arr, setArr] = useState([]);

     const messages = ['React', 'Re: React', 'Re:Re: React'];
     const posts = [
         {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
         {id: 2, title: 'Installation', content: 'You can install React from npm.'}
     ];

     const handelChange = (e) => {
         setInputValue(e.target.value);
         // console.log(inputValue);
     };
     const addFunc = () => setArr([inputValue , ...arr]);


     return(
         <div>
             <h2>8.List_Keys</h2>
             <ul>
                 {messages.map(x =>
                         <li key={x}>{x}</li>
                     )}
             </ul>
             <hr/>
             <ul>
                 {posts.map(x =>
                         <li key={x.id}>{x.content}</li>
                     )}
             </ul>
             <hr/>
             <input type="text" value={inputValue} onChange={handelChange}/>
             <button onClick={addFunc}>Add</button>
             <hr/>
             <ol>
                 {arr.map((item,idx) =>
                    <li key={idx}>{item}</li>
                 )}
             </ol>
         </div>
     )
 }
 export default List_Keys