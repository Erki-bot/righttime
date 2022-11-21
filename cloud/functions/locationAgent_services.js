Parse.Cloud.define("locationAgent_services",async function (req)
{
    const company = req.params.company;
    if (!company){
      throw("missing company name")
    }
})