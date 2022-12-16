const genLocUrl = require("../../functions/genLocURL");
Parse.Cloud.define ("locationUpdate",async (req) => {
    const company = req.params.company;
    if (!company)
    {
        throw("missing company name");
    }
    const className = company + '_Location';
    const l = req.params.location;
    if(!l.id){
        throw ("Cannot update a location with null id");
    }
    const location = new Parse.Object(className);
    location.id = l.id;

    //Vérifier si le nom de la location a changé afin de pouvoir mettre à jour son url;

    let query = new Parse.Query(className);
    let newName = await query.get(l.id);
    newName = newName.attributes.businessLocationName;
    const oldName = (l.attributes||l).businessLocationName;
    let result = await location.save(l);
    if (!result.attributes.url||(newName!== oldName)){
        console.log("****\n****\nLocation name changed\n****\n****");
        const url = await genLocUrl(company,l.businessLocationName);
        result.set("url",url);
        result = await result.save();
    }
    else
    {
        console.log("****\n****\nLocation name not changed\n****\n****");
    }
    query.include('services');
    query.include('breaks');
    return await query.get(result.id);
})
