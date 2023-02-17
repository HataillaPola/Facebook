import axios from "axios"

// Create Profile 
export function CreateProfiles(NameOrEmail, Password){
    let URL = "/api/v1/CreateProduct";
    let PostBody = {
        NameOrEmail:NameOrEmail,
        Password:Password
    }
return axios.post(URL, PostBody).then((Response)=>{
        if(Response.status===200){
            return true;
        }else{
            return false
        }
    }).catch((Error)=>{
        console.log(Error)
        return false
    })
}

// Read Profile 
export function Read(){
    let URL = "/api/v1/ReadProuct/:id"
    return axios.get(URL).then((Response)=>{
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


    // exports.defult = CreateProfile