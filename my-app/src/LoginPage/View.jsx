import axios from "axios"
// import React, { useState , useRef } from 'react'
import React, { useState } from 'react'
import { useEffect } from 'react'

import "./View.css"
import image from "./img.gif"

//  Read 
function Read(){
    let URL = "http://localhost:5000/api/v1/ReadProfile"
    return axios.post(URL).then((Response)=>{
            if(Response.status===200){
                return Response["data"].Data
            }else{
                return false
            }
        }).catch((Error)=>{
            console.log(Error)
            return false
        })
}


// Delete 
function Delete(id){
    let URL = "http://localhost:5000/api/v1/DeleteUser/"+id
return axios.post(URL).then((Response)=>{
        if(Response.status===200){
            return true
        }else{
            return false
        }
    }).catch((Error)=>{
        console.log(Error);
        return false
    })
}

function View (){

    let [DataList, SetDataList]= useState([]);
    useEffect(()=>{

      // এইখান থেকে ডাটা রিড করা শুরু করবে 
      Read().then((Response)=>{
        SetDataList(Response)
        console.log(Response["Data"])
      })

    },[])


      // Delete Button 
  const DeleteItem=(id)=>{

    // Delete(id).then((Result)=>{
    //   if(Result===true){
    //     // Evry click relode component 
    //     window.location.reload()
    //     alert("Delete Item Success")
    //   }
    //   else{
    //     alert("Delete Fail, Try Again" + "" + id)
        
    //   }
    // })

    alert("হাতাইল্লা")

  }


// return start 
    return(<>
    
    
    <div className='container'>
        <div className="Top">
          <img src={image} alt="" />
        </div>



      <table className='table' >
          <thead className='thead'>
            <tr className="tr">
              <th>User Name Or Email Address</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                DataList.map((item, i)=>{
                  return(
                    <tr className="tr">
                      <td>{item.NameOrEmail}</td>
                      <td>{item.Password}</td>
                      <td>
                        <button onClick={DeleteItem.bind(this, item._id) } className='UpdateBtn'>Update</button>
                        
                        <button onClick={DeleteItem.bind(this, item._id)} className='DeleteBtn'>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
      </table>
    </div>
    
    
    </>)

}

export default View