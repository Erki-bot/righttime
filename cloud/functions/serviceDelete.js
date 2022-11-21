Parse.Cloud.define("serviceDelete",async (req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
    const service =  await new Parse.Query(company+'_Service').include("category").get(req.params.id);
    const category = service.attributes.category;
    category.remove("services",service);
    await category.save();
    return await service.destroy();
})