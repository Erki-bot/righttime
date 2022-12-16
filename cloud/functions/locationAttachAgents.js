Parse.Cloud.define ("locationAttachAgents",async (req) => {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const lid = req.params.locationId;
    const agentsList = req.params.agentsList;
    const location = new Parse.Object(company + "_Location");
    location.id = lid;
    agentsList.forEach(agent => {
        location.addUnique("agents", agent);
    });
    return await location.save();
})
