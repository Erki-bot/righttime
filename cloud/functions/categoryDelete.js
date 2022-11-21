Parse.Cloud.define("categoryDelete",async (req) =>{
  const company = req.params.company;
  if (!company){
    throw("missing company name")
   // return {error : 404, message : "missing company name"}
  }
  const cat = await  new Parse.Query(company+"_Category").include("services").get(req.params.id)
  const services = cat.attributes.services
 await services.forEach(async service => {
    service.set("category",null)
    await service.save() 
  });
    return await cat.destroy();;
})