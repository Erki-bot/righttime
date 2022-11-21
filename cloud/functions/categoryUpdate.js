Parse.Cloud.define("categoryUpdate",async (req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
    const category = req.params.category;
    // const query = Parse.Query("Category");
    // query.equalTo("id",params.id);
    const cat = new Parse.Object(company+"_Category")
    cat.objectId = req.params.id;
    return await cat.save(category)
})