Parse.Cloud.define ("locationRemoveServices",async (req) => {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const lid = req.params.locationId;
    const sid = req.params.serviceId;
    const serviceClassName = company + '_Service';
    const locationClassName = company + '_Location';
    const location = await new Parse.Query(locationClassName).include("services").get(lid);
    const service = new Parse.Object(serviceClassName);
    service.id = sid;
    location.remove("services",service);
    return {code : 200, data : await location.save()}

})