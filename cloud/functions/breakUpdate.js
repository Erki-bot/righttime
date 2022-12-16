Parse.Cloud.define('breakUpdate', async (req) => {
    const company = req.params.company;
    if (!company){
        throw ("missing company name");
    }
    const bClassName = company + "_Break";
    const brk = new Parse.Object(bClassName);
    const lClassName = company + '_Location';
    const bId = req.params.breakId;
    const bk = req.params.bk;
    const lId = req.params.locationId;

    brk.id = bId;
    //ubk.objectId = bId;
    await brk.save(bk);
    const query = new Parse.Query(lClassName);
    query.include("services");
    query.include("breaks");
    return await query.get(lId);

})