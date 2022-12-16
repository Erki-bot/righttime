Parse.Cloud.define("locationAgentServices",async function (req)
{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
    const locationId = req.params.locationId;
    const agentId = req.params.agentId;
    const location = new Parse.Object(company + '_Location');
    location.id = locationId;
    const query = new Parse.Query(company+'_AgentServiceMapping');
    query.include('service');
    query.include('location');
    query.equalTo('location',location);
    query.equalTo('agentId',agentId);
    return await query.find()
})