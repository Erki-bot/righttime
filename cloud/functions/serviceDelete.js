Parse.Cloud.define("serviceDelete",async (req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
    const lClassName = company+'_Location';
    const lQ = new Parse.Query(lClassName);
    lQ.include("services");
    const locList = await lQ.find();

    const service =  await new Parse.Query(company+'_Service').include("category").get(req.params.id);
    if (service.attributes.category)
    {
        throw ("service is assigned to a category "+service.attributes.category.attributes.name);
    }
 /*
    const category = service.attributes.category;
   try {
        category.remove("services", service);
        await category.save();
    } catch (e){}
  */
    for (const loc of locList){
        const locSerList = loc.attributes.services;
        for (const s of locSerList){
            if (s.id === service.id){
                throw ("service is assigned to location "+loc.attributes.businessLocationName);
            }
        }
    }
    return await service.destroy();
})