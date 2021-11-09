const mongoose = require('mongoose'); 
 const foodSchema= mongoose.Schema({ 
     type:{
         type:String, 
         required:true 
         },
    
     price:{
          type:String, 
          require:true
        },
    foodname:{
            type:String,
            required:true
             }
             
        });

 module.exports=mongoose.model('foods',foodSchema); 