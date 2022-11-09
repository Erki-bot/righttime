Parse.Cloud.define("categoryGetAll",async (req)=>{
  const query  = new Parse.Query("Category");
return await query.find();  
})