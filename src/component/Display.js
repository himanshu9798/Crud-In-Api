import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import App from "../App";


function Display() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getdata()
   
  }, []);
 function getdata(){
    Axios.get("https://akashsir.in/myapi/crud/todo-list-api.php").then(
        (res) => {
          console.log(res.data.todo_list);
          setData(res.data.todo_list);
        }
      );
}

    function deletedata(id){
    var myforadata= new FormData() 
    myforadata.append("todo_id",id) 
    Axios.post("https://akashsir.in/myapi/crud/todo-delete-api.php", myforadata) 
    .then(res=>{ 
    if(res.data.flag=='1') 
    alert("Data Deleted") 
    else{
    alert("Sorry") 
    } 
    getdata() 
    }) 
    .catch(err=>alert(err)) 
    }
  return (
    <div>
    
        <div style={{textAlign:"center",textTransform:"uppercase",color:"gray"
            ,textDecoration:"italic",
            textShadow:"2px 2px white",
            backgroundColor:"rgba(0,0,0,0.1)"}}><h1>To do Task using Api With Crud Operation</h1></div>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Details</th>
          
          <th>Created Date</th>
          <th>Action</th>
        </tr>
        {data.map((value) => {
          return <>
          <tr>
            <td>{value.todo_id}</td>
            <td>{value.todo_title}</td>
            <td>{value.todo_details}</td>
           
            <td>{value.todo_date}</td>
            <td><Link style={{color:"purple"}} to={`/edit/${value.todo_id}`}>Edit</Link>
          
            <button onClick={() => deletedata(value.todo_id)}>X</button>
            </td>

          </tr>
          </>;
        })}
      </table>
    </div>
  );
}

export default Display;
