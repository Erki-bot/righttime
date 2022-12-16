const genLocUrl = require("../../functions/genLocURL");
Parse.Cloud.define ("locationSave",async (req) => {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const className = company + '_Location'
    const l = req.params.location;
    const location = new Parse.Object(className);
    const url = await genLocUrl(company,l.businessLocationName);
    location.set("url",url);
    const loc = await location.save(l);
    const query = await new Parse.Query(className).get(loc.id);
    return await query;
})
