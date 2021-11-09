const express= require('express'); 
const food = require('../models/food');
const router= express.Router();
 const Post= require('../models/food'); 
 // getting all posts 
 router.get('/', async(req,res) =>{ 
      try{ const food = await Post.find(); 
        res.json(food);
     }catch (err){ res.json({message:err}); } });

  // getting a post by id

  router.get('/:postid', async(req,res) =>{
      try{ const food = await Post.findById(req.params.postid); 
        res.json(food); 
    }catch(err){ res.json({message:err}); } })

   // creating a post

 router.post('/',(req,res)=>{ const food =new Post({ type:req.body.type,
    price:req.body.price,
    foodname:req.body.foodname
 });
  food.save(). then(data =>{ res.json(data); }).catch (err=>{ res.json({message:err}); }) }); 

 // deleting a post

 router.delete('/:postid', async(req,res) =>{ 
     try{ const removefood = await Post.deleteOne({_id: req.params.postid}); 
     res.json(removefood);
     }catch(err){ res.json({message:err}); } } ); 

 // updating a post by id

 router.patch('/:postid', async(req,res) =>{ 
    try{ const editfood = await Post.findOne({_id: req.params.postid}); 
    if(req.body.type){
   editfood.type=req.body.type;
    }
    if(req.body.price){
  editfood.price=req.body.price;
   }
   if(req.body.foodname){
  editfood.foodname=req.body.foodname;
   }
 await editfood.save();
 res.json(editfood); }
 catch(err){ res.json({message:err}); } });

 module.exports= router;