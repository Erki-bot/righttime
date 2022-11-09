Parse.Cloud.define("categorySave",async (req)=>{
   const params = req.params; 
   const cat = new  Parse.Object("Category")
   return await cat.save(params)
})