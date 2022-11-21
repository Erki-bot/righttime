Parse.Cloud.define("categoryGetAll",async (req)=>{
  const company = req.params.company;
  if (!company){
    throw("missing company name")
   // return {error : 404, message : "missing company name"}
  }
  const query  = new Parse.Query(company+"_Category");
return await query.find();  
})