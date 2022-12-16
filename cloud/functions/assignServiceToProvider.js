Parse.Cloud.define("assignServiceToProvider",async (req)=> {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const className = company + '_AgentServiceMapping'
    const serviceId = req.params.serviceId;
    const agentId = req.params.agentId;
    const locationId = req.params.locationId
    const location = new Parse.Object(company+'_Location');
    location.id = locationId;
    const service = new Parse.Object(company+'_Service');
    service.id = serviceId;
    const serToPro = new Parse.Object(className)
    serToPro.set('location',location);
    serToPro.set("service",service);
    serToPro.set("agentId",agentId);
    /*
    const service = await new Parse.Query(company+'_Service').get(serviceId);
    service.addUnique('agents',agentId);
     */
    return await serToPro.save();
})