const CreateModel = require("../Model/Model.js")


// Create Profile
exports.CreateProfile=(req, res)=>{
      
    let RequestBody = req.body;

    CreateModel.create(RequestBody,(error, Data)=>{
        if(error){
            res.status(400).json({status:"Profile Create Fail", data:error,})
        }else{
            res.status(200).json({status:"Profile Create Success or Data save success", data:Data,})
        }
    })

}


//Read Profile 
exports.ReadProfile=(req, res)=>{
    
    let Query = {}
    let Projection = "NameOrEmail Password"

    CreateModel.find(Query, Projection,function(error, Data){
        if(error){
            res.status(400).json({status:"Read Profile Fail, an sure NameOrEmail", Data:error})
        }
        else{
            res.status(200).json({status:"Read Profile success, see profile data", Data:Data})
        }
    })

}




// Delete 
exports.DeleteUser = (Req, Res) => {
    
    let Id =  Req.params.id;
    // let Query = {_id: Id};
    let Query = {_id : Id};
    // test = Req.body

    CreateModel.remove(Query,(Error, Data)=>{
        if(Error){
            Res.status(400).json({status:"Fail", Data:Error})
        }
        else{
            Res.status(200).json({status:"Success", Data:Data})
        }
    })

}