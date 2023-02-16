const Mongose = require("mongoose");

const DataSchema =  Mongose.Schema(
    {
      NameOrEmail:{type:String},
      Password:{type:String},
    },{
        versionKey:false
    }
);

const CreateModel =  Mongose.model("Data", DataSchema);


module.exports = CreateModel;