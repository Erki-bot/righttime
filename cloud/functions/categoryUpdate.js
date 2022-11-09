Parse.Cloud.define("categoryUpdate",async (req)=>{
    const params = req.params;
    // const query = Parse.Query("Category");
    // query.equalTo("id",params.id);
    const cat = new Parse.Object("Category")
    cat.objectId = params.id;
    return await cat.save(params.cat)
})