Parse.Cloud.define("removeServiceToProvider",async (req)=> {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const className = company + '_AgentServiceMapping'
    const serviceId = req.params.serviceId;
    const agentId = req.params.agentId;
    const locationId = req.params.locationId
    const query = new Parse.Query(className)
    const service = new Parse.Object(company+'_Service');
    const location = new Parse.Object(company+'_Location');
    service.id = serviceId;
    location.id = locationId;
    query.equalTo("service",service);
    query.equalTo("location",location);
    query.equalTo("agentId",agentId);
    const serToPro = await query.first();
    const mapping = new Parse.Object(className);
    mapping.id = serToPro.id;
    return await serToPro.destroy();
})