Parse.Cloud.define('breakDelete', async (req) => {
    const company = req.params.company;
    if (!company) {
        throw ("missing company name");
    }
    const lClassName = company + '_Location';
    const bClassName = company + '_Break';
    const lId = req.params.locationId;
    const bId = req.params.breakId;
    const brk = new Parse.Object(bClassName);
    const loc = new Parse.Object(lClassName);
    brk.id = bId;
    loc.id = lId;
    loc.remove('breaks',brk);
    await loc.save();
    await brk.destroy();
    const query = new Parse.Query(lClassName);
    return await query.get(lId);
})