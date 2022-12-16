Parse.Cloud.define("locationRemoveAgent",async (req) => {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const locationId = req.params.locationId;
    const agentId = req.params.agentId;
    const location = new Parse.Object(company + '_Location');
    location.id = locationId;
    location.remove("agents", agentId);
    return await location.save();
})