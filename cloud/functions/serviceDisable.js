Parse.Cloud.define("serviceDisable",async (req)=>{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
    const service = new Parse.Object(company+'_Service');
    const serviceId = req.params.id;
    service.id = serviceId;
    service.set("status","Deactivated");
    return await service.save()
})