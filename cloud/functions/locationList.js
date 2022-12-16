Parse.Cloud.define ("locationList",async (req) => {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const query = new Parse.Query(company + '_Location')
    query.include("services");
    query.include('breaks');
    return {data: await query.find()}
})
