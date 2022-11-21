Parse.Cloud.define('serviceUpdate',async (req) =>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
    //Getting the service to update (store in 's')
    const s = req.params.service.service;
    //Getting the category of the service
    const newCatId = req.params.service.categoryId;
    const sQuery = new Parse.Query(company+"_Service");
    const cQuery = new Parse.Query(company+"_Category");
    sQuery.include("category");
    const service = await sQuery.get(s.id);
    const oldCatId = service.attributes.category?.id;
    const newCat = new Parse.Object(company+"_Category")
    if(!newCatId){
        service.set("category",null);
        if(oldCatId){
            
            const tempCat = await cQuery.get(oldCatId);
            tempCat.remove("services",service)
            await tempCat.save()
        }
    }
    else if (newCatId !== oldCatId){
        newCat.id = newCatId;
        service.set("category",newCat);
        newCat.addUnique("services",service);
        await newCat.save()
        if(oldCatId){
            const tempCat = await cQuery.get(oldCatId);
            tempCat.remove("services",service)
            await tempCat.save()
        }
    }
   return await service.save()
})