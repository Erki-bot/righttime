Parse.Cloud.define("accountGet",async (req) => {
    const company = req.params.company;
    if (!company) {
        throw("missing company name")
    }
    const query = new Parse.Query(company + '_Account')
    return {data: await query.find()}
})