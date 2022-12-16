Parse.Cloud.define ("breakTagGetAll",async (req) => {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const className = company + '_Tag'
    const query = new Parse.Query(className);
    const tagsList = (await query.find()).map(t => {
        return {...t.attributes, id: t.id};
    })
    return tagsList;
})