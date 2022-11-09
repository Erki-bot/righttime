Parse.Cloud.define("categoryDelete",async (req) =>{
  const  cat = new Parse.Object("Category");
  cat.id = req.params.id;;
 //cat.save();
  
    return await cat.destroy();;
})