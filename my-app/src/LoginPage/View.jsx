import axios from "axios"
// import React, { useState , useRef } from 'react'
import React, { useState } from 'react'
import { useEffect } from 'react'

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
    let URL = 'http://localhost:5000/api/v1/DeleteUser'+id
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

    Delete(id).then((Result)=>{
      if(Result===true){
        // Evry click relode component 
        window.location.reload()
        alert("Delete Item Success")
      }
      else{
        alert("Delete Fail, Try Again" + "" + id)
        
      }
    })




  }


    return(<>
    
    
    <div className='container'>
      <h2 className='text-center m-4'>Read Delete </h2>
      <table className='table table-bordered table-striped table-hover' >
          <thead className='thead-light'>
            <tr>
              <th>Product Name</th>
              <th>Product Code</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                DataList.map((item, i)=>{
                  return(
                    <tr >
                      <td>{item.NameOrEmail}</td>
                      <td>{item.Password}</td>
                      <td>
                        {/* <button onClick={UpdateItem.bind(this, item._id) } className='btn btn-success mx-1'>Update</button> */}
                        
                        <button onClick={DeleteItem.bind(this, item._id)} className='btn btn-danger mx-1'>Delete</button>
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