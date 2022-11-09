Parse.Cloud.define("serviceGetAll",async (req)=>{
    const query  = new Parse.Query("Service");
    return await query.find();  
})