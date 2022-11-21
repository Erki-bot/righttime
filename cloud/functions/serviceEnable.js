Parse.Cloud.define("serviceEnable",async (req) => {
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
    const service = new Parse.Object(company+"_Service")
    service.id = req.params.id;
    service.set({status : "Active"})
    return await service.save()
})