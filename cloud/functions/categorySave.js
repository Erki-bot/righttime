Parse.Cloud.define("categorySave",async (req)=>{
   const company = req.params.company;
   if (!company){
     throw("missing company name")
   }
   const category = req.params.category; 
   const cat = new  Parse.Object(company+"_Category")
   return await cat.save(category)
})