const  findObjectById  = require("../../functions/findObjectById");
Parse.Cloud.define("serviceSave",async (req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
const catId  = req.params.service.categoryId;
const catName = req.params.service.categoryName;
const service = new Parse.Object(company+"_Service");
console.clear();
console.log("Id de la catégorie : "+catId);
console.log("Nom de la catégory : "+catName)
const cat = new Parse.Object(company+'_Category')
if(catId)
{
    cat.id = catId;
    service.set("category", cat);
}
const newService = await service.save(req.params.service.service);
if (catId)
{cat.addUnique('services',newService)
cat.save()}
return newService;
})